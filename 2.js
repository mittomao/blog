$(function()
{
    var playerTrack = $("#player-track");
	var bgArtwork = $('#bg-artwork');
	var bgArtworkUrl;
	var albumName = $('#album-name');
	var trackName = $('#track-name');
	var list = $('#list-album');
	var albumArt = $('#album-art'), 
		sArea = $('#s-area'),
		seekBar = $('#seek-bar'),
		trackTime = $('#track-time'),
		insTime = $('#ins-time'),
		sHover = $('#s-hover'),
		playPauseButton = $("#play-pause-button"),
		i = playPauseButton.find('i'),
		tProgress = $('#current-time'),
		tTime = $('#track-length'),
		seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
		buffInterval = null, tFlag = false;
	
	var playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
	
	var songs = [{
        stt : 0,
		artist: "Track 1",
		name: "Từ Khi Gặp Em - Trịnh Thăng Bình",
		url: "Music/Tu_Khi_Gap_Em.mp3",
		picture: "3.jpg"
    },
    {
        stt : 1,
		artist: "Track 2",
		name: "Thương Em Là Điều Anh Không Ngờ Tới",
		url: "Music/ThuongEmLaDieuAnhKhongTheNgo.mp3",
		picture: "4.jpg"
    },
    {
        stt : 2,
		artist: "Track 3",
		name: "OST Có Tôi Ở Đây Rùi ! ",
		url: "Music/Co_Toi_O_Day_Roi.mp3",
		picture: "6.jpg"
    },
    {
        stt : 3,
		artist: "Track 4",
		name: "Yêu Từ Xa  -  Hồ Việ Trung",
		url: "Music/Yeu_Tu_Xa.mp3",
		picture: "5.jpg"
    },
    {
        stt : 4,
		artist: "Track 5",
		name: "Ác Ma Đến Từ Thiên Đường",
		url: "Music/Ac_Ma_Tu_Thien_Duong.mp3",
		picture: "4.jpg"
    }
];

	// Xáo Trộn Bài Hát
	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	// songs = shuffle(songs);
    // Hàm Điểu Khiển Bài Hát
    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fa fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-play');
                audio.pause();
            }
        },300);
    }

    	// Hiện Thị Thời Gian Của Bài Hát
	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		// insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        // insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    // Tua Loi Bai Hat
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
			selectTrack(1);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');
			
            currAlbum = songs[currIndex].name; 
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;
            audio.src = songs[currIndex].url;
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();
            document.getElementById(`stt_${currIndex}`).classList.toggle("hehe");

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }
            albumName.html(`<marquee behavior="smoth" direction="left">${currAlbum}</marquee>`);
            trackName.text(currTrackName);
            $('#album-art img').prop('src', `./Music/Picture/${currArtwork}`);
            bgArtwork.prop('style',`background-image: url("./Music/Picture/${currArtwork}")`);
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }
    // Ham Show List AlbumArt
    function showList(){
        let i = -1;
        let str = songs.reduce((acc,item)=>{
            i++;
            return acc + `<li class= "abc"><i class="fa fa-play" aria-hidden="true"></i><h5 class = "${i===0?'fisrt':'h5'}" id = "stt_${i}">${item.name}</h5></li>`;
        },"");
    
        list.html(str);
          
    }
// Hàm Main
    $(window).on( "load", showList)
    function initPlayer()
	{	
        audio = new Audio();

        selectTrack(0);
        
        showList();

		audio.loop = true;
		
		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);

        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);
  

        playPreviousTrackButton.on('click',function(){ 
            h5 = $(".h5");
            h5.removeClass("hehe");
            selectTrack(-1);
            
        } );
        playNextTrackButton.on('click',function(){ 
            h5 = $(".h5");
            h5.removeClass("hehe");
            h5.removeClass("first");
            selectTrack(1);
            
        });
        
    }
  
    initPlayer();
});


