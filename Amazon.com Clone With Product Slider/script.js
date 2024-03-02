const images = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;
function slideChange(){
    for(let i=0;i<images.length;i++){
        images[i].style.display="none";
    }
    images[n].style.display="block";
}
slideChange()

prev_btn.addEventListener("click",(e)=>{
    if(n>0){
        n--;
    }else{
        n = images.length -1;
    }
    slideChange()
})
next_btn.addEventListener("click",(e)=>{
    if(n< images.length -1){
        n++;
    }else{
        n=0;
    }
    slideChange()
})


const scrollContainer = document.querySelectorAll(".products");
for(const item of scrollContainer){
    item.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;

    })
}