let likes=document.querySelectorAll(".like")
for (let like of likes) {
   let plus=like.querySelector(".plus");
   let minus=like.querySelector(".minus");
   let counter_element=like.querySelector(".counter");
   let counter=0;
   plus.onclick=function(){
    counter++;
    counter_element.textContent=counter;

   }
   minus.onclick=function(){
    counter--;
    counter_element.textContent=counter;
   }
}