var element = document.querySelector("header");
 
function myscroll() {  
  if (window.pageYOffset > 50) {
    element.classList.add("active"); 
  } else{
    element.classList.remove("active"); 
  }
}; 
window.onscroll = myscroll;
myscroll();

let video = document.getElementById("async-video"); 
if(video !== null && video !== undefined ){
    let createVideo = document.createElement("video");
    createVideo.setAttribute("class", "bg-video");
    createVideo.setAttribute("loop", "1");
    createVideo.setAttribute("muted", "true");
    createVideo.setAttribute("autoplay", "autoplay");
    createVideo.setAttribute("playsinline", "1");
    createVideo.setAttribute("id", "myVideo");

    let createSource = document.createElement("source");
    createSource.setAttribute("src", video.dataset.video);
    createSource.setAttribute("poster", "/img/hero.webp");
    createSource.setAttribute("type", "video/mp4");
    setTimeout(function(){ 
        createVideo.appendChild(createSource);
        createVideo.load();
        let hero = document.getElementById("hero");
        hero.appendChild(createVideo); 
    }, 1000); 
}
var burger = document.getElementsByClassName("hamburger");
let nav =  document.getElementsByClassName("header_cont_nav_list");
for (var i = 0; i < burger.length; i++) {
  burger.item(i).addEventListener('click', function(e){
    e.preventDefault();
    nav[0].classList.toggle("active");
    burger[0].classList.toggle("is-active");
 });
}


var videoFrame = document.getElementsByClassName("block-video"); 
for (var i = 0; i < videoFrame.length; i++) {
  for (var play = 0; play < videoFrame.item(i).childNodes.length; play++) {
    if(videoFrame.item(i).childNodes[play].className !== undefined){ 
        function searchElement(elem, className, f) {
          let elemCall = f || function (){};
          this.elem = elem;
          this.className = className;
          if (this.elem.className === this.className && this.elem.className !== undefined ) { 
               return elemCall.call(this.elem); 
          }
          return this.elem   
        } 
         searchElement(videoFrame.item(i).childNodes[play], "block-video_play", 
          function(){ 
            this.addEventListener('click', function(e){
                  e.preventDefault();
                  this.parentElement.classList.toggle("active");  
                  let frame = this.parentElement.dataset.video;
                  let createIframe = document.createElement("iframe");
                  createIframe.setAttribute("frameborder", "0");
                  createIframe.setAttribute("allow", "autoplay; fullscreen");
                  createIframe.setAttribute("allowfullscreen", "");
                  createIframe.setAttribute("src", frame); 
                  for (var fr = 0; fr < this.parentElement.childNodes.length; fr++) { 
                      if (this.parentElement.childNodes[fr].className === "block-video_modal" && this.parentElement.childNodes[fr] !== undefined ) { 
                         return this.parentElement.childNodes[fr].childNodes[3].appendChild(createIframe) 
                      }
                  }
                  
              }); 
          }
        ) 
        searchElement(videoFrame.item(i).childNodes[play], "block-video_modal", 
          function(){   
            let wrap = videoFrame.item(i)
            let frame = this.childNodes[3];
            this.childNodes[1].addEventListener('click', function(e){ 
                wrap.classList.toggle("active");
                frame.removeChild(frame.childNodes[0])
            }); 
          }
        )

    } 
           
  }  
 
}



let framePost = document.getElementsByClassName("post_iframe"); 
  
if(framePost !== null && framePost !== undefined ){ 
    for (var i = 0; i < framePost.length; i++) { 
      framePost.item(i).addEventListener('click', function(e){
        e.preventDefault();
        let src = this.dataset.src; 
        let createIframe = document.createElement("iframe");
        createIframe.setAttribute("frameborder", "0");
        createIframe.setAttribute("allow", "autoplay; fullscreen");
        createIframe.setAttribute("allowfullscreen", "");
        createIframe.setAttribute("src", src); 
        console.log(createIframe);
        this.appendChild(createIframe) 
      });
    } 
}

let team = document.getElementsByClassName("team-people");
if(team !== null && team !== undefined ){ 
  for (var i = 0; i < team.length; i++) { 
    team.item(i).addEventListener('click', function(e){
       e.preventDefault();
       for (var j = 0; j < team.length; j++) { 
            team.item(j).parentElement.classList.remove('active')
       }
       this.parentElement.classList.add('active'); 
       this.parentElement.querySelector("div.close").addEventListener('click', function(e){
        this.parentElement.closest('.block-26_cont_items').classList.remove('active');
      });
       
    });
  }
}

let svg = document.querySelectorAll(".map_svg path");
let cont = document.querySelectorAll(".map_svg_items");
if(svg !== null && svg !== undefined ){ 
  for (var i = 0; i < svg.length; i++) { 
    svg.item(i).addEventListener('mouseenter', function(e){
       e.preventDefault();   
       console.log(this)
       if(this.dataset.id !== undefined){
        for (var j = 0; j < cont.length; j++) {  
          cont.item(j).classList.remove('active') 
        }
        let color = this.getAttribute("fill");
        this.closest('.map').querySelector('#' + this.dataset.id).classList.add('active');
        this.closest('.map').querySelector('#' + this.dataset.id).style.left =  e.offsetX - 60 + 'px';
        this.closest('.map').querySelector('#' + this.dataset.id).style.top =  e.offsetY + 130  + 'px';
        this.closest('.map').querySelector('#' + this.dataset.id).style.border =  2 + 'px' + ' solid ' + color;
        this.addEventListener('mouseout', function(e){
          this.closest('.map').querySelector('#' + this.dataset.id).classList.remove('active');
         }); 
       }
        
    });
    svg.item(i).addEventListener('click', function(e){
      e.preventDefault();   
      if(this.dataset.id !== undefined){
       for (var j = 0; j < cont.length; j++) {  
         cont.item(j).classList.remove('active') 
       }
       let color = this.getAttribute("fill");
       this.closest('.map').querySelector('#' + this.dataset.id).classList.add('active');
       this.closest('.map').querySelector('#' + this.dataset.id).style.left =  e.offsetX - 60  + 'px';
       this.closest('.map').querySelector('#' + this.dataset.id).style.top =  e.offsetY + 130 + 'px';
       this.closest('.map').querySelector('#' + this.dataset.id).style.border =  2 + 'px' + ' solid ' + color;
       this.addEventListener('mouseout', function(e){
        this.closest('.map').querySelector('#' + this.dataset.id).classList.remove('active');
       });  
    }   
   });
  }
}

let faq = document.getElementsByClassName("block-29_faq_questions");
if(faq !== null && faq !== undefined ){ 
  for (var i = 0; i < faq.length; i++) { 
    faq.item(i).addEventListener('click', function(e){
       e.preventDefault();
       for (var j = 0; j < faq.length; j++) { 
         if(faq.item(j).parentElement !== this.parentElement){
            faq.item(j).parentElement.classList.remove('active')
          }
       }
       this.parentElement.classList.toggle('active'); 
    });
  }
}

let tabs = document.querySelectorAll(".tabs_logic .tabs_title");
if(tabs !== null && tabs !== undefined ){ 

  document.querySelectorAll(".tabs_logic").forEach(function(el, index){ 

    el.querySelectorAll('.tabs_title').item(0).classList.add('active');
    el.querySelectorAll('.tabs_content').item(0).classList.add('active') 
  }); 
  tabs.forEach(function(el, index){  
    el.addEventListener('click', function(e){
        e.preventDefault(); 
        for (var j = 0; j < this.closest('.tabs_logic').querySelectorAll(".tabs_title").length; j++) { 
        this.closest('.tabs_logic').querySelectorAll(".tabs_title")[j].classList.remove("active");
        this.closest('.tabs_logic').querySelectorAll('.tabs_content')[j].classList.remove("active");
        }
        this.classList.add('active');
        let newindex = 0;
        this.closest('.tabs_logic').querySelectorAll(".tabs_title").forEach(function(el, index){
            if(el.classList.contains('active')){
              newindex = index;
            }
        });
        this.closest('.tabs_logic').querySelectorAll('.tabs_content')[newindex].classList.add('active');
    });
  });
}

var newslide = new venhrun({
  clas_slider: 'slider-v',
  clas_prev: '.slider-list_prev',
  clas_next: '.slider-list_next',
  class_items: '.slider-list_items',
  class_slide_view: '.slider-list_view_img',
  class_slide_view_wp: '.slider-list_view_img-wp',
  clas_loop: '.slider-list_loop',
  active_count: 2,
});
 
function venhrun(v) {
  this.slider = document.getElementsByClassName(v.clas_slider); 
  this.slide_items = document.querySelectorAll(v.class_items);
  this.slide_view = document.querySelectorAll(v.class_slide_view);
  this.slide_view_wp = document.querySelectorAll(v.class_slide_view_wp);
  this.btn_prev = document.querySelectorAll(v.clas_prev);
  this.btn_next = document.querySelectorAll(v.clas_next);
  this.btn_loop = document.querySelectorAll(v.clas_loop);
  this.active_count = v.active_count || 1;
 
  let newThis = this;

    
  if(this.slider !== null && this.slider !== undefined ){ 
    for (var i = 0; i < this.slider.length; i++) { 
      let newCount =  this.active_count;
      inintial(this.slider.item(i), newCount);  
      this.slider.item(i).addEventListener('click', function(e){  
          
        if( e.target.className == this.querySelectorAll('.slider-list_prev')[0].className){  
            prev(this, newCount);  
            buttonShow(this, newCount); 
        } 
        if( e.target.className === newThis.btn_next[0].className){  
          next(this, newCount); 
          buttonShow(this, newCount); 
        } 
         
        if(newThis.btn_loop[0] !== undefined && e.target.className === newThis.btn_loop[0].className ){  
          this.classList.add('modal'); 
          document.getElementsByTagName('body')[0].classList.add('hidden');
        } 
        
        if( e.target.className === "slider-list_close"){  
          this.classList.remove('modal');
          document.getElementsByTagName('body')[0].classList.remove('hidden');
        }
      });

      this.slider.item(i).querySelectorAll(".slider-list_items").forEach(function(el, index){ 
          el.addEventListener('click', function(e){ 
            this.closest(".slider-v").querySelectorAll(".slider-list_items")[newCount].classList.remove("active"); 
            if(this.closest(".slider-v").querySelectorAll(".slider-list_items").length > 4){
              style(this.closest(".slider-v"), index);
            } 
            inintial(this.closest(".slider-v"), index);
            newCount = index; 
            buttonShow(this.closest(".slider-v"), newCount); 
          }); 
      });



      function inintial(elem, count){ 
        let initItems= elem.querySelectorAll(".slider-list_items")[count];
        initItems.classList.add('active'); 
        if(elem.querySelectorAll(".slider-list_items").length <= 4){
          elem.classList.add('bootton-hide');
        }
         
        elem.querySelectorAll(".slider-list_view_img")[0].src = initItems.querySelector("img").dataset.src;
        elem.querySelectorAll(".slider-list_view_img-wp")[0].src = initItems.querySelector("img").dataset.src;
      }
      function prev(elem, count){   
        if(count > 2 && elem.querySelectorAll(".slider-list_items").length - 3 >= count){
          elem.querySelectorAll(".slider-list_items").forEach(function(el, index){  
              let precent = -100 * (count - 3);
              console.log(precent)
              el.style.transform = 'translate(' + precent + '%, 0)'; 
          }); 
         }    
       
        if(count !== 0){ 
           
          elem.querySelectorAll(".slider-list_items")[newCount].classList.remove("active")
          inintial(elem, count - 1);
          newCount--; 
        } 
            
      } 
      function next(elem, count){    
        if(count > 1 && elem.querySelectorAll(".slider-list_items").length - 4 >= count){
          elem.querySelectorAll(".slider-list_items").forEach(function(el, index){  
              let precent = -100 * (count - 1);
              el.style.transform = 'translate(' + precent + '%, 0)'; 
          });
        }  
        if(count < elem.querySelectorAll(".slider-list_items").length - 1){
          elem.querySelectorAll(".slider-list_items")[newCount].classList.remove("active")
          inintial(elem, count + 1);
          newCount++; 
        }  
         
      } 

      function style(elem, count){ 
          elem.querySelectorAll(".slider-list_items").forEach(function(el, index){ 
            if(count > 1 && elem.querySelectorAll(".slider-list_items").length - 3 >= count){  
              if((newCount - count) < 0){ 
                  let precent = -100 * (count - 2) 
                  el.style.transform = 'translate(' + precent + '%, 0)';  
              }else{ 
                  let precent = -100 * (count - 2)  
                  el.style.transform = 'translate(' + precent + '%, 0)';  
              } 
            } else if(count <= 1){
                  let precent = 0;
                  el.style.transform = 'translate(' + precent + '%, 0)'; 
            } else if(elem.querySelectorAll(".slider-list_items").length - 3 <= count){
              let precent = (elem.querySelectorAll(".slider-list_items").length - 5) * -100;
              el.style.transform = 'translate(' + precent + '%, 0)';
            }  
          });   
      }

      function buttonShow(elem, count){ 
        if(count === 0){ 
          elem.classList.add('hide-prev');
          elem.classList.remove('hide-next') 
        }else if(elem.querySelectorAll(".slider-list_items").length -1 === count){
          elem.classList.add('hide-next');
          elem.classList.remove('hide-prev')
        }else{
          elem.classList.remove('hide-prev')
          elem.classList.remove('hide-next')
        }  
      }

    } 
  }

}
