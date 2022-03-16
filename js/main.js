AOS.init();


 let home=document.getElementById('Home');
 let vanta=document.getElementById('vanta');
 let startbtn=document.getElementById('startbtn');
vanta.style.display="flex";
home.style.display="none";
startbtn.addEventListener('click',()=>{
  vanta.style.display="none";
  home.style.display="block";
})