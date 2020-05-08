const player = document.querySelector("#player");
const progressBar = document.querySelector(".progressbar");
const progress = document.querySelector(".progress-time");
const progressVolum = document.querySelector(".progressVolum");
const progressV = document.querySelector(".progressV");
const curTime = document.querySelector("#curtime");
const durTime = document.querySelector("#durtime");
const playButton = document.querySelector("#playerButton");
const loopButton = document.querySelector("#loop");
const volumButton = document.querySelector("#volum");
const titleMusic = document.querySelector(".title-music");
const controls = document.querySelector(".controls");
var duration = 0;

// Lap Bai Hat 
player.loop = true;
loopButton.onclick = function(){
    player.currentTime =0;
    
}
playButton.onclick = function(){
    if(this.classList.contains("fa-play-circle")){
        this.classList.replace("fa-play-circle","fa-pause-circle");
        player.play();
    }
    else{
        this.classList.replace("fa-pause-circle","fa-play-circle");
        player.pause();
    }
}
volumButton.onclick = function(){
    progressVolum.classList.toggle("active");
    if(this.classList.contains("fa-volume-up")){
        this.classList.replace("fa-volume-up","fa-volume-off");
        // player.volume = 0.3;
    }
    else{
        this.classList.replace("fa-volume-off","fa-volume-up");
        // player.volume = 1;

    }
}

player.onloadedmetadata = function(){
    duration = player.duration; //so giay cua bai hat
    // chuyen ve phut va giay
    const min = Math.floor(duration/60);
    const sec = Math.floor(duration%60);
    durTime.innerHTML = `${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`;
}

player.addEventListener("timeupdate",function(){
    let currentTime = this.currentTime;
    const min = Math.floor(currentTime/60);
    const sec = Math.floor(currentTime%60);
    curTime.innerHTML = `${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`;
    let widthTime = (currentTime/duration)*100;
    progress.style.width = widthTime + "%";
});

let down = false;
progressBar.addEventListener("click",function(e){
    progress.style.width = e.offsetX + "px";
    let percent = (e.offsetX/progressBar.offsetWidth)*100;
    player.currentTime = percent*duration/100;
});

progressBar.addEventListener("mousedown",function(){
    down =true;
});
progressBar.addEventListener("mouseup",function(){
    down =true;

});

progressBar.addEventListener("mouseout",function(){
    down =false;

});
progressBar.addEventListener("mousemove",function(e){
    if(down)
    {
        progress.style.width = e.offsetX + "px";
        let percent = (e.offsetX/progressBar.offsetWidth)*100;
        player.currentTime = percent*duration/100;
    }
});

// Cho Volume

progressVolum.addEventListener("click",function(e){
    progressV.style.width = e.offsetX + "px";
    let percent = (e.offsetX/progressVolum.offsetWidth)*100;
    player.volume = percent/100;
});

// List Song
var songs = [{
    stt : 0,
    artist: "Track 1",
    name: "Từ Khi Gặp Em - Trịnh Thăng Bình",
    url: "Music/Tu_Khi_Gap_Em.mp3",
    lyrics : [
        ["Anh Thật Là Ngu Ngốc",20,25],
        ["Bảo Vệ Người Ấy Cũng Không Xong",27,30],
        ["Lỡ Làm Người Yêu Khóc ",31,35],
        ["Vậy Còn Xứng Đáng Yêu Không",36,40]
    ]
},
{
    stt : 1,
    artist: "Track 2",
    name: "Thương Em Là Điều Anh Không Ngờ Tới",
    url: "Music/ThuongEmLaDieuAnhKhongTheNgo.mp3",
    lyrics : [
        ["Anh Thật Là Ngu Ngốc",20,25],
        ["Bảo Vệ Người Ấy Cũng Không Xong",27,30],
        ["Lỡ Làm Người Yêu Khóc ",31,35],
        ["Vậy Còn Xứng Đáng Yêu Không",36,40]
    ]
},
{
    stt : 2,
    artist: "Track 3",
    name: "Tất Cả Sẽ Thay Anh ! ",
    url: "Music/Tat_Ca_Se_Thay_Em.mp3",
    lyrics : [
        ["Anh Thật Là Ngu Ngốc",20,25],
        ["Bảo Vệ Người Ấy Cũng Không Xong",27,30],
        ["Lỡ Làm Người Yêu Khóc ",31,35],
        ["Vậy Còn Xứng Đáng Yêu Không",36,40]
    ]
},
{
    stt : 3,
    artist: "Track 4",
    name: "Yêu Từ Xa  -  Hồ Việt Trung",
    url: "Music/Yeu_Tu_Xa.mp3",
    lyrics : [
        ["Anh Thật Là Ngu Ngốc",20,25],
        ["Bảo Vệ Người Ấy Cũng Không Xong",27,30],
        ["Lỡ Làm Người Yêu Khóc ",31,35],
        ["Vậy Còn Xứng Đáng Yêu Không",36,40]
    ]
},
{
    stt : 4,
    artist: "Track 5",
    name: "Ác Ma Đến Từ Thiên Đường",
    url: "Music/Ac_Ma_Tu_Thien_Duong.mp3",
    lyrics : [
        ["Anh Thật Là Ngu Ngốc",20,25],
        ["Bảo Vệ Người Ấy Cũng Không Xong",27,30],
        ["Lỡ Làm Người Yêu Khóc ",31,35],
        ["Vậy Còn Xứng Đáng Yêu Không",36,40]
    ]
},
{
    stt : 5,
    artist: "Track 6",
    name: "Em Không Sai , Chúng Ta Sai",
    url: "Music/Em-Khong-Sai-Chung-Ta-Sai.mp3",
    lyrics : [
        ["Anh Thật Là Ngu Ngốc",20,25],
        ["Bảo Vệ Người Ấy Cũng Không Xong",27,30],
        ["Lỡ Làm Người Yêu Khóc ",31,35],
        ["Vậy Còn Xứng Đáng Yêu Không",36,40]
    ]
}
];

var currIndex = -1;
var lineIndex = 0;

// Khu Vuc Viet Ham Karraaoke



// 

function showAlbum(data){
    const listAlbum = document.querySelector("#list-album");
    let str = "";
    data.map((item,index)=>{
        str+=`<li class="music" data-img = '${item.picture}' data-id ="${index}" data-title = "${item.name}" data-url = "${item.url}"><span class="fa fa-play"></span><p>Track ${index+1}: ${item.name}</p></li>`;
        return str;
    });
    listAlbum.innerHTML = str;
}
// Show Ra Danh Sach
showAlbum(songs);

const musics = document.querySelectorAll(".music");
musics.forEach(music=>{
    music.onclick = function(){
        testActive(music);
        // controls.style.backgroundImage = `url(./Music/Picture/${music.getAttribute("data-img")})`; 
        playButton.classList.replace("fa-play-circle","fa-pause-circle");
        let url = music.getAttribute("data-url");
        player.setAttribute("src" , url);
        player.play();
        titleMusic.innerHTML = `<marquee>${music.getAttribute("data-title")}</marquee>`;
        currIndex = parseInt(music.getAttribute("data-id"));
    }
});

function testActive(element){
       
        for (const item of musics) {
            item.classList.remove("active_s");
            item.childNodes[1].classList.remove("hehe");
        }
        
        element.classList.add("active_s");
        element.childNodes[1].classList.add("hehe");   
}
function stackMusic(url,title=""){
    player.setAttribute("src",url);
    titleMusic.innerHTML = title;
}
const prevButton = document.querySelector("#prevButton");
prevButton.onclick = function(){
    currIndex  = currIndex -1;
    if(currIndex < 0)
    {
        currIndex=songs.length-1;
    }
    // testActive(currIndex,musics[currIndex]);
    testActive(musics[currIndex]);
    stackMusic(songs[currIndex].url , songs[currIndex].name);
    player.play();
}
const nextButton = document.querySelector("#nextButton");
nextButton.onclick = function(){
    currIndex = currIndex + 1;
    if(currIndex > songs.length-1)
    {
        currIndex=0;
    }
    testActive(musics[currIndex]);
    stackMusic(songs[currIndex].url,songs[currIndex].name);
    player.play();
}