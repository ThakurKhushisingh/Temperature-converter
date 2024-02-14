b = document.getElementById('btn');
b.addEventListener('click',(e)=>{
  
   cel = document.getElementById('c');
   fah = document.getElementById('f');

   if(cel.value>0){
       cel = document.getElementById('c');
   fah = document.getElementById('f');
   cc=cel.value;
   fah.value =fah.value+'°F';
   fah.value = (cc*9/5)+32+'°F';
       cel.value=cel.value+'°C';
   }
   else if(fah.value>0){
       cel = document.getElementById('c');
       fah = document.getElementById('f');
       ff=fah.value;
       cel.value = (ff-32)*5/9+'°C';
       fah.value=fah.value+'°F'; 
   
   }
   else{
       cel.value ='';
       fah.value ='';
   }
   b.style.height='60px';
   b.style.width='100px';
   b.style.background='green';

});
c.addEventListener('click',(e)=>{
   cel = document.getElementById('c');       
    b = document.getElementById('btn');
   fah = document.getElementById('f');
   cel.value='';
       fah.value='';
       b.style.background='blue';
});
f.addEventListener('click',(e)=>{
   cel = document.getElementById('c');
   b = document.getElementById('btn');
   fah = document.getElementById('f');
   cel.value='';
       fah.value='';
       b.style.background='blue';
});