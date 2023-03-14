(function(){
   const listAll = document.getElementsByClassName('list-all')[0];
   const cart = document.getElementById('cart');
   const close = document.getElementById('close');
   const bestLinks = document.querySelectorAll('best-tab > li');

   listAll.addEventListener("click", changeNav);
   cart.addEventListener('click', cartBoxView);
   close.addEventListener('click', cartBoxView);
   


   function changeNav(){
      const nav = document.getElementsByTagName('nav')[0].offsetTop + 52;
      const sitemap = document.getElementById('sitemap');
      listAll.classList.toggle('close');
      listAll.classList.toggle('newlist');
      console.log(listAll.className);
      if(listAll.className == 'list-all close'){
        sitemap.style.top = nav+"px";
        sitemap.style.display="block";
      }else{
         sitemap.style.display="none";
      }
   }

   function cartBoxView(){
      document.getElementsByClassName('cart-view')[0].classList.toggle('none');
   }
   //슬라이드쇼
let slideIndex = -1;
showSlides(slideIndex);
function showSlides(n) {
let i;
let slides = document.getElementsByClassName("img-slide");
if(n > slides.length) {slideIndex = 1}
if(n < 1) {slideIndex = slides.length}
for(i = 0; i < slides.length; i++){
   slides[i].style.display = "none";
}
slides[slideIndex - 1].style.display = "block";
}

  // const bx = document.getElementById("ct");
   // console.log(bx.dataset);

//    window.onload = function(){
//    }
}());


//슬라이드쇼
let slideIndex = 0;
   showSlides();
function showSlides() {
   let i;
   const slides = document.getElementsByClassName("img-slide");
   const dot = document.getElementsByClassName('dot');
   for(i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
      dot[i].classList.remove("active");
   }
   slideIndex++;
   if(slideIndex > slides.length){
      slideIndex = 1;
   }
   slides[slideIndex - 1].style.display = "block";
   dot[slideIndex-1].classList.add('active');
   setTimeout(showSlides, 2000);
}
document.getElementsByClassName('tablinks')[0].click();
function openBest(e, bid){
   const tabcontent = document.getElementsByClassName('besttabcontent');
   for(i=0; i< tabcontent.length; i++){
      tabcontent[i].style.display = "none";
   }
   const tablinks = document.getElementsByClassName('tablinks');
   for(i=0; i< tablinks.length; i++){
      tablinks[i].classList.remove('active');
   }
document.getElementById(bid).style.display = "block";
e.currentTarget.classList.add('active');

}


function viewTab(e){
const tabcontent = document.getElementsByClassName('tabcontent');
const tabs = document.getElementsByClassName('tab')[0];
for(let i = 0; i < tabcontent.length; i++){
   tabcontent[i].classList.remove('active');
   tabs.children[i].classList.remove('active');
}
for(let i = 0; i < tabcontent.length; i++){
   tabs.children[i]
}

tabcontent[e].classList.add('active');
tabs.children[e].classList.add('active');
}

fetch('data/shoplist.json')
.then((res)=>res.json())
.then((res)=>{
   let li = '';
   let color = '';
   for(i = 0; i < res.shoplist.length; i++){
      li += 
      '<div class="col-lg-3 my-5">'+
          '<div class="card">'+
              '<a href="main.html"><img src="'+res.shoplist[i].img+'" class="img-fluid" alt="01">'+
              '</a>'+
                  '<div class="card-body">'+
                  '<ul class="pd-list">'+
                      '<li><span class="gray"></span>'+
                      '<span class="blue"></span>'+
                      '<span class="black"></span>'+
                      '<span class="white"></span>'+
                      '</li>'+
                      '<li class="pd-title">'+
                          '<h1'+res.shoplist[i].title+'</h1>'+
                      '</li>'+
                     '<li>'+
                          '<del>'+res.shoplist[i].delprice+'</del>'+
                          '<br>'+
                          '<strong>'+res.shoplist[i].saleprice+'</strong>'+
                      '</li>'+
                      '<li>'+
                          '<p>'+res.shoplist[i].content+'</p>'+
                      '</li>'+
                      '<li class="last">'+
                          '<span>'+res.shoplist[0].news+'</span>'+
                          '<span>'+res.shoplist[1].news+'</span>'+
                      '</li>'+
                  '</ul>'+
              '</div>'+
          '</div>'+
      '</div>'
   }
   document.getElementById('row').innerHTML = li;
}
   )
   .catch((err) => console.log(error));
