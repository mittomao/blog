const colors = [
    {id: 1, bgColor: "background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);"},
    {id: 2, bgColor: "background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);"},
    {id: 3, bgColor: "background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);"},
    {id: 4, bgColor: "background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);"},
    {id: 5, bgColor: "background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);"},
    {id: 6, bgColor: "background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);"},
    {id: 7, bgColor: "background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);"},
    {id: 8, bgColor: "background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);"},
    {id: 9, bgColor: "background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);"},
    {id: 10, bgColor: "background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);"},
    {id: 11, bgColor: "background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);"},
    {id: 12, bgColor: "background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);"},
    {id: 13, bgColor: "background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);"},
    {id: 14, bgColor: "background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);"},
    {id: 15, bgColor: "background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);"},
    {id: 16, bgColor: "background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);"},
    {id: 17, bgColor: "background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);"},
    {id: 18, bgColor: "background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);"},
    {id: 19, bgColor: "background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);"},
    {id: 20, bgColor: "background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);"},
];

function showColor(){
    let str = "";
        for (const value of arguments) {
            str+=`<div class="col col-6 col-md-4 col-lg-3">
                    <div class="box-linear">
                        <h5>${value.id}</h5>
                        <div class="box-linear__content" style='${value.bgColor}'></div>
                        <a href="#" class = "save-bg" data-bg = "${value.bgColor}"><i class="fa fa-save"></i></a>
                        <div class="popup-color">
                            <p>${value.bgColor}</p>
                            <span class="close-popop">
                                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>`;
        }
    const listColor = document.querySelector("#listColor");
    listColor.innerHTML = str;
}
showColor(...colors);


function togglePopup(){
    const saveC = document.querySelectorAll(".save-bg");
    const popup = document.querySelectorAll(".popup-color");
    const closePopop = document.querySelectorAll(".popup-color");
    
    saveC.forEach((el,index)=>{
        el.addEventListener("click",function(e){
            e.preventDefault();
            //Lay Cha Cua nO
            popup[index].classList.add("active-bg");
        });
    })
    // Dong Tab
    closePopop.forEach((el,index)=>{
        el.addEventListener("click",function(e){
            e.preventDefault();
            popup[index].classList.remove("active-bg");
        });
    })
}

togglePopup();


// Edit Bg

const formG = document.querySelector(".try-gradient");
const showG = document.querySelector(".question");
const closeG = document.querySelector(".close-try");

function showFormGradient(e){
    e.preventDefault();
    formG.classList.add("active-showG");
}
function closeFormGradient(){
    formG.classList.remove("active-showG");
}

showG.addEventListener("click",showFormGradient);
closeG.onclick = closeFormGradient;

const objColor = {};
const hesogoc = document.querySelector("#hesogoc");
const buttonTry = document.querySelector("#button-try");
buttonTry.addEventListener("click",function(){
    let content="";
    const color1 = document.querySelector("#color1").value;
    const color2 = document.querySelector("#color2").value;
    const result = document.querySelector("#result-color");
    const demo = document.getElementById("box-try");
    const pos = document.querySelector("#position").value;
    
    if(objColor.hsg!==""&&objColor.hsg!==undefined)
    {
        content = `linear-gradient(${objColor.hsg}deg, ${color1} , ${color2})`;
    }
    else{
        content = `linear-gradient(to ${pos}, ${color1} , ${color2})`;
    }
    demo.style.background = content;
    result.value = "background-image : " + content;
});
hesogoc.addEventListener("keyup",function(){
    objColor.hsg = hesogoc.value;
    console.log(objColor)
})
