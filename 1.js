// const heart = document.querySelectorAll(".heart");
const iconFB = document.querySelectorAll(".icon-fb");
const idol = document.querySelectorAll(".idol");
const avatar = document.querySelector("#avatar");
const logoIdol = document.querySelector("#logo-idol");

const feelings = ["like.png","love.png","haha.png","wow.png","sad.png","angry.png"];
const idols = ["1.gif","2.gif","3.gif","4.gif"];
const obj = {};
const obj1 = {};
iconFB.forEach((element,i) => {
    // let type = element.getAttribute("data-type");
    // obj[type] = feelings[i];
    element.addEventListener("click",()=>{
        let srcImg = element.getAttribute("src");
        console.log(srcImg)
        avatar.setAttribute("src" , `${srcImg}`);
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

console.log(obj,obj1);
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
    element.addEventListener("click",()=>{
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
    setTimeout(currentShow, 7000);
}
currentShow(curentIndex=0);