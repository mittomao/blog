const heart = document.querySelectorAll(".heart");
// const iconFB = document.querySelectorAll(".icon-fb");
const idol = document.querySelectorAll(".idol");
const avatar = document.querySelector("#avatar");
const logoIdol = document.querySelector("#logo-idol");
const backLeft = document.querySelector("#back-left");

const feelings = ["like.png","love.png","care.png","haha.png","wow.png","sad.png","angry.png"];
const idols = ["6.gif","2.gif","3.gif","4.gif"];
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

idol.forEach((element,i) => {
    let dataId = element.getAttribute("data-id")
    obj1[dataId] = idols[i];
    element.addEventListener("click",()=>{
        element.classList.toggle("active-idol");
        logoIdol.setAttribute("src" , `Image/${obj1[dataId]}`);
    });
});

backLeft.onclick = function () {
    backLeft.firstChild.classList.toggle("active-xoay");
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
    let str = "";
        for (const value of arguments) {
            str+=`<div class="col col-md-6 col-12 col-lg-6">
                <div class="card">
                    <a href="#" class="card-title"><i class="fa fa-share mr-2"></i>${value.title}</a>
                    <h5 class="card-subject">${value.catagory} - <span>${value.subject}</span></h5>
                    <p class="card-link">${value.link}</p>
                    <p class="card-date">${value.date}</p>
                </div>
            </div>`;
        }
    return str;
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


let listTin = document.getElementById("list-tin");
window.onload = function(){
    listTin.innerHTML = showData(...items);
    // let listPagi = document.querySelector(".right_pagination");
    // listPagi.innerHTML = phantrang(items,3);
}


// Tao Hieu Ung Con Tro Chuot

const currorMain = document.querySelector("#curror");
function createCurror(e){
    currorMain.style.top = e.pageY + 'px';
    currorMain.style.left = e.pageX + 'px';
    currorMain.style.transition = 0.1 + "s" + "ease";
}
window.addEventListener("mousemove" , createCurror);