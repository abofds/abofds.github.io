let bigPic=document.querySelector('.reviu img')
let smallPics=document.querySelectorAll('.images img')
for (let pic of smallPics) {
    let active=document.querySelector('.active');
    pic.onclick=function(){
        active.classList.remove("active");
        pic.classList.add("active");
        bigPic.src=pic.src;
        active=pic;
    };
}
