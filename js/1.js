const heart = document.querySelectorAll(".heart");
// const iconFB = document.querySelectorAll(".icon-fb");
const idol = document.querySelectorAll(".idol");
const avatar = document.querySelector("#avatar");
const logoIdol = document.querySelector("#logo-idol");
const backLeft = document.querySelector("#back-left");

const feelings = ["like.png","love.png","care.png","haha.png","wow.png","sad.png","angry.png"];
// const idols = ["6.gif","2.gif","3.gif","4.gif"];
const obj = {};
const obj1 = {};
heart.forEach((element,i) => {
    let type = element.getAttribute("data-type");
    obj[type] = feelings[i];
    element.addEventListener("click",()=>{
        // let srcImg = element.getAttribute("src");
        // console.log(srcImg)
        avatar.setAttribute("src" , `feeling/${obj[type]}`);
    });
});



// Idol Trộn

// idol.forEach((element,i) => {
//     let dataId = element.getAttribute("data-id")
//     obj1[dataId] = idols[i];
//     element.addEventListener("click",()=>{
//         element.classList.toggle("active-idol");
//         logoIdol.setAttribute("src" , `Image/${obj1[dataId]}`);
//     });
// });

backLeft.onclick = function () {
    backLeft.classList.toggle("active-xoay");
    // backLeft.firstChild.classList.toggle("active-xoay");
    document.querySelector(".is-show").classList.toggle("hideNav");
}


// Card

// function margeArr(arr1,arr2){
//     let obj = {};
//     let arr_new =[];
//     for (let i = 0; i < arr1.length; i++) {
//         obj[arr1[i]] = arr2[i];
//         arr_new.push(obj);
//     }
//     return arr_new;
// }
// console.log(margeArr(arr1,arr2));


const tab = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".content");

tab.forEach(element=>{
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        const dataId = element.getAttribute("data-id");
        showContent(dataId);
    });
});

function showContent(id){
    for(let i = 0 ; i< contents.length;i++){
        contents[i].classList.remove("active-tab");
    }
    let content = document.getElementById(id);
    content.classList.add("active-tab");
    // console.log(show)
}


// Set Slider Cho Header
let curentIndex = 0;
function currentShow(){
    const slide = document.querySelectorAll(".header-item");
    for(let i = 0; i < slide.length; i++) {
        const element = slide[i];
        // element.style.display = "none";
        element.classList.remove("active-s");
    }
    slide[curentIndex].classList.add("active-s");
    curentIndex++;
    if(curentIndex>slide.length - 1)
    {
        curentIndex=0;
    }
    setTimeout(currentShow, 10000);
}
currentShow(curentIndex=0);

// Fake API

const items = [
    {id : 1, subject : "HTML" , catagory : "Tips" , title : "Titlte 1",link:"http://google.com",date : "23-08-1998" },
    {id : 2, subject : "CSS" , catagory : "Tips" , title : "Titlte 2",link:"http://google.com",date : "23-08-1998" },
    {id : 3, subject : "JS" , catagory : "Tips" , title : "Titlte 3",link:"http://google.com",date : "23-08-1998" },
    {id : 4, subject : "React Js" , catagory : "Tips" , title : "Titlte 4",link:"http://google.com",date : "23-08-1998" },
    {id : 5, subject : "PHP" , catagory : "Tips" , title : "Titlte 5",link:"http://google.com",date : "23-08-1998" },
    {id : 6, subject : "PyThon" , catagory : "Tips" , title : "Titlte 6",link:"http://google.com",date : "23-08-1998" },
];

function showData(){
    
    let listTin = document.getElementById("list-tin");
    let str = "";
        for (const value of arguments) {//col-md-6 col-12 col-lg-6
            str+=`<div class="col-md-8 col-12 offset-md-2 col-card">
                <div class="card card--tin">
                    <a href="${value.link}" class="card-title"><i class="fa fa-share mr-2"></i>${value.title}</a>
                    <h5 class="card-subject">${value.catagory} - <span>${value.subject}</span></h5>
                    <p class="card-link">${value.link}</p>
                    <p class="card-date">${value.date}</p>
                </div>
            </div>`;
        }
    listTin.innerHTML =  str;
}

// // Phan Trang
//     // let tranght = 1;
    
    
// function phantrang(data ,sopt){
//     let start = 0 ;
//     let str="";
//     let ds = [];
//     while(start<data.length){
//         ds.push(data.slice(start , start+sopt));
//         start+=sopt;
//     }
//     ds.map((value,key)=>{
//         str += `<li class="pagi-item">${key+1}</li>`;
//     });
//     ds.map(value=>{
//         let abc = document.querySelectorAll(".pagi-item");
//         abc.forEach(element => {
//             element.addEventListener("click",()=>{
//                 console.log(value)
//             })
//         });
//     })
//     return str;
// }

// // let pagiItem = document.querySelectorAll(".pagi-item");
// // pagiItem.onclick = function(){
// //     console.log("HAHA")
// // }


window.onload = function(){
    showData(...items);
    // let listPagi = document.querySelector(".right_pagination");
    // listPagi.innerHTML = phantrang(items,3);
}


// Tao Hieu Ung Con Tro Chuot

const currorMain = document.querySelector("#curror");
function createCurror(e){
    currorMain.style.top = e.pageY + 'px';
    currorMain.style.left = e.pageX + 'px';
    currorMain.style.transition = 0.01 + "s";
}
window.addEventListener("mousemove" , createCurror);


// Tao Hieu Ung Khi Load 

const left = document.querySelectorAll(".section-left");
const right = document.querySelectorAll(".default");

left.forEach((item,i) => {
    item.addEventListener("click",()=>{
        //minus
        let icon = item.children[0];
        if(icon.classList.contains("fa-plus")){
            icon.classList.replace("fa-plus","fa-minus");
        }
        else{
            icon.classList.replace("fa-minus","fa-plus");
        }
        right[i].classList.toggle("active-section");
})
});
        

// window.addEventListener("resize",function(){
//     if(window.innerWidth<992)
//     {
//         document.querySelector(".is-show").classList.add("hideNav");
//         backLeft.firstChild.classList.toggle("active-xoay");

//     }
// })
//  const switchB = document.querySelector("#switch");

// function toggleBgColor(){
//     const tab1 = document.querySelector(".content-tips");
//     tab1.classList.toggle("active-showBgColor");
// }
// switchB.addEventListener("click",toggleBgColor)

function randomBox(){
    const header = document.querySelector(".header");
    for(let i = 0 ; i < 10;i++)
    {
        let span = document.createElement("span");
        span.className="boxS";
        header.appendChild(span);
    }
   
    const listSpan = document.querySelectorAll(".header span");

    
    function random(max,min) {
        return (Math.random()*(max-min)+min);  
    }
    listSpan.forEach(sp=>{
        setInterval(() => {
            const rd_left = Math.abs(random(header.offsetWidth,-header.offsetWidth));
            const rd_bottom = Math.abs(random(header.offsetHeight,-header.offsetHeight));
            const rd_wh = Math.abs(random(100,-100));
            sp.style.bottom = rd_bottom+"px";
            sp.style.left = rd_left+"px";
            sp.style.width = rd_wh + "px";
            sp.style.height = rd_wh + "px";
            
        }, 3000);
    });
}
// randomBox();

const searchTitle = document.querySelector("#search-title");

searchTitle.onkeyup = function () {
    const content = this.value;
    const items_demo = [...items];
    const a = items_demo.filter((item,index)=>{
        return item.subject.indexOf(content)===0;
    });
    console.log(a)
    showData(...a);
}
