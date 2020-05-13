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
            str+=`<div class="col col-md-3">
                    <div class="box-linear">
                        <h5>${value.id}</h5>
                        <div class="box-linear__content" style='${value.bgColor}'></div>
                        <a href="#" class = "save-bg" data-bg = "${value.bgColor}"><i class="fa fa-save"></i></a>
                    </div>
                </div>`;
        }
    const listColor = document.querySelector("#listColor");
    listColor.innerHTML = str;
}
showColor(...colors);

const saveC = document.querySelectorAll(".save-bg");
const popup = document.querySelector(".popup-color");
saveC.forEach(el=>{
    el.addEventListener("click",function(e){
        e.preventDefault();
        //Lay Cha Cua nO
        popup.classList.add("active-bg");
        popup.children[0].innerHTML = el.getAttribute("data-bg");
    });
})

const closePopop = document.querySelector(".popup-color");
closePopop.addEventListener("click",function(){
    popup.classList.remove("active-bg");
});


