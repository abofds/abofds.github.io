let button=document.querySelector('.cards')
let main=document.querySelector('main');
let button1=document.querySelector('.standart')


button.onclick=function(){   
    main.classList.add("cards");
    button1.classList.remove("active");
    button.classList.add("active");
}

button1.onclick=function(){    
    main.classList.remove("cards");
    button1.classList.add("active");
    button.classList.remove("active");
}
