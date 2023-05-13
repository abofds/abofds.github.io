let button=document.querySelector('.tembutton');
button.onclick=function(){
    document.body.classList.toggle("darktem");
}
let texts=document.querySelectorAll('article');
for (let text of texts) {
    let more=text.querySelector('.more');
    more.textContent="Читать далее";
    more.onclick=function(){
        text.classList.toggle("short");
        if(more.textContent=="Читать далее"){
        more.textContent="Скрыть";}else{
            more.textContent="Читать далее";
        }
    }
    
}
