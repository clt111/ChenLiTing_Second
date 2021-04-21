let header_top = document.querySelector('.header_top_w');
let reback_top = document.querySelector('.reback-top');
//让顶部的页头在滑动到一定高度的时候上去
//让回到顶部的按钮出现
setInterval(function(){
    let srt = document.documentElement.scrollTop || document.body.scrollTop;
    if(srt > 830){
        header_top.style.display = 'none';
        reback_top.style.display = 'block';
    }
    if(srt < 770)
    {
        header_top.style.display = 'block';
        reback_top.style.display = 'none';
    }
},500);
//点击搜索框的时候变色以及placeholder改变
let search = document.querySelector('.search');
let search_icon = document.querySelector('.search_icon');
console.log(search);
search.addEventListener('click',function(){
    search.style.border = '1px solid #007fff';
    search.placeholder = '文章/小册/标签/用户';
    search.style.overflow ='true';
    search.style.font = '16px'; 
    search_icon.style.color = '#007fff';
})
search.addEventListener('blur',function(){
    if(search.placeholder === '文章/小册/标签/用户'){
        search.placeholder = '探索掘金';
    }
    search.style.border = '1px solid #b2b5b3';
    search_icon.style.color = '#bec7d2'

})
//点击写文章旁边的更多出现发布沸点
let t_more = document.querySelector('.t-more');
let jd =document.querySelector('.jd');
t_more.addEventListener('click',function(){
    jd.style.display = 'block';
    t_more.style.backgroundcolor ='#2151ba';
})
t_more.addEventListener('blur',function(){
    jd.style.display = 'none';
    t_more.style.backgroundcolor ='#007ffff';
})
//点击页头下部的出现对应的框
let header_bottom_h = document.querySelectorAll('.header_bottom_h');
let header_bottom_t = document.querySelectorAll('.header_bottom_t');
for(let i = 0; i< header_bottom_t.length ;i++){
    header_bottom_t[i].setAttribute('index',i);
    header_bottom_t[i].addEventListener('mouseover',function(){
        for(let j = 0 ;j < header_bottom_h.length ;j++){
            header_bottom_h[j].style.display = 'none';
        }
        header_bottom_h[this.getAttribute('index')].style.display = 'block';
    })
    header_bottom_t[i].addEventListener('mouseout',function(){
        for(let j = 0 ;j < header_bottom_h.length ;j++){
            header_bottom_h[j].style.display = 'none';
        }
    })
}
//处理页面缩放页头的变化

//获取页面缩放比例
 var ratios =  function detectZoom() {
    var ratio = 0,
        screen = window.screen,
        ua = navigator.userAgent.toLowerCase();
  
    if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    }
    else if (~ua.indexOf('msie')) {
      if (screen.deviceXDPI && screen.logicalXDPI) {
        ratio = screen.deviceXDPI / screen.logicalXDPI;
      }
    }
    else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
      ratio = window.outerWidth / window.innerWidth;
    }
  
    if (ratio) {
      ratio = Math.round(ratio * 100);
    }
    return ratio;   
  }
  
//2.获取元素
let main_lis = document.querySelector('.main_list');
let sy = document.querySelector('.sy');
let wwz = document.querySelector('.wwz');
let offer = document.querySelector('.offer');
let search_float = document.querySelector('.search-float');
let dl_float = document.querySelector('.dl-float');
//缩放到150%的时候，一些元素变化
  setInterval(function(){
    let ratioss =  ratios();
    if(ratioss >= 225){
        sy.style.display = 'block';
        main_lis.style.display = 'none';
        wwz.style.display = 'none';
        offer.style.display = 'none';
        t_more.style.display = 'none';
        sy.style.display = 'block';
    }
    if(ratioss < 225){
        sy.style.display = 'none';
        main_lis.style.display = 'block';
        wwz.style.display = 'block';
        offer.style.display = 'block';
        t_more.style.display = 'block';
        sy.style.display = 'none';
    }
  }, 100);

  
  
//点击缩放到150%的首页
let sy_list = document.querySelector('.sy_list');
let body =document.querySelector('body');

body.addEventListener('click',function(){
    sy.addEventListener('click',function(){
        sy_list.style.display = 'block';
    })
    sy_list.style.display = 'none';

})