const heart = document.querySelectorAll(".heart");
const avatar = document.querySelector("#avatar");

// avatar.setAttribute("src","2.jpg");
// console.log(heart);  
const feelings = ["like.png","love.png","haha.png","wow.png","sad.png","angry.png"];
const obj = {};
heart.forEach((element,i) => {
    let type = element.getAttribute("data-type")
    obj[type] = feelings[i];

    element.addEventListener("click",()=>{
        avatar.setAttribute("src" , `feeling/${obj[type]}`);
    });
});

console.log(obj);

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