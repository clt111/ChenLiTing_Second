let dlym = document.querySelector('.dlym');
var dl_btn = document.querySelectorAll('.dl-btn');
let cover =document.querySelector('.cover');
let in_number = document.querySelector('.in-number');
let on_number = document.querySelector('.onnumber');
let xm = document.querySelector('.xm');
let out_dl = document.querySelector('.out-dl');

let dl_other = document.querySelector('.dl-other');
let dl_h3 = document.querySelector('h3');
let zm1 = document.querySelector('.zm1');
let zm2 = document.querySelector('.zm2');
let onyz = document.querySelector('.onyz');
let yzm = document.querySelector('.yzm');
let rewrite = document.querySelector('.rewrite');
let submit = document.querySelector('.submit');

//获取切换按钮
let other_dl = document.querySelector('.other-dl');
let mobile_dl = document.querySelector('.mobile-dl');
let mail_r = document.querySelector('.mail-r');
let mobile_r = document.querySelector('.mobile-r');
let forget_mm = document.querySelector('.forget-mm');
let zm_dl = document.querySelector('.zm-dl'); 

// 按下登录按钮的时候，登录页面出现同时遮盖层出现，并且input处于选中状况，盒子加蓝色边框
for(let i =0;i<dl_btn.length;i++){
    dl_btn[i].onclick = function(){
       dlym.style.display = 'block';
       cover.style.display = 'block';
       on_number.style.border = '1px solid #007fff';
       xm.src = 'images/xm2.png';
       in_number.focus();
    }
}
//当鼠标处于×上面的时候，×变色
out_dl.addEventListener('mouseenter',function(){
    this.style.color = 'black';
})
//鼠标离开的时候，颜色变回了
out_dl.addEventListener('mouseout',function(){
    this.style.color = '#959085';
})
//鼠标按下的时候，登录页面隐藏
out_dl.addEventListener('click',function(){
    dlym.style.display = 'none';
    cover.style.display = 'none';
    dl_other.style.display = 'none';
    dl_h3.innerHTML = '手机登录';
    forget_mm.style.display = 'none';
    on_number.style.display = 'block';
    zm1.style.display = 'none';
    onyz.style.display = 'block';
    zm2.style.display = 'none';
   forget_mm.style.display = 'none';
   mobile_dl.style.display = 'none';
   other_dl.style.display = 'block';

})

//点击手机登录的时候
mobile_dl.addEventListener('click',function(){
    dl_other.style.display = 'none';
    dl_h3.innerHTML = '手机登录';
    forget_mm.style.display = 'none';
    on_number.style.display = 'block';
    zm1.style.display = 'none';
    onyz.style.display = 'block';
    zm2.style.display = 'none';
   forget_mm.style.display = 'none';
   mobile_dl.style.display = 'none';
   other_dl.style.display = 'block';
})
// 点击其他登录方式的时候
other_dl.addEventListener('click',function(){
                  dl_other.style.display = 'block';
                dl_h3.innerHTML = '账密登录';
                on_number.style.display='none';
                zm1.style.display = 'block';
                onyz.style.display = 'none';
                zm2.style.display = 'block';
                forget_mm.style.display ='block';
                other_dl.style.display = 'none';
                mobile_dl.style.display = 'block';

    })
//点击忘记密码的时候
forget_mm.addEventListener('click',function(){
    dl_h3.innerHTML = '手机重置密码';
    rewrite.style.display = 'block';
    dl_other.style.display = 'none';
    forget_mm.style.display = 'none';
    on_number.style.display = 'block';
    zm1.style.display = 'none';
    onyz.style.display = 'block';
    zm2.style.display = 'none';
    forget_mm.style.display = 'none';
    mail_r.style.display = 'block';
    zm_dl.style.display = 'block';
    mobile_dl.style.display = 'none';
    
})
//点击邮箱重置密码
mail_r.addEventListener('click',function(){
    dl_h3.innerHTML = '邮箱重置密码';
    rewrite.placeholder = '请输入邮箱';
    on_number.style.display = 'none';
    zm1.style.display = 'none';
    zm2.style.display = 'none';
    onyz.style.display = 'none';
    mail_r.style.display = 'none';
    mobile_r.style.display = 'block';
    zm_dl.style.display = 'block';
})
//点击手机重置密码
mobile_r.addEventListener('click',function(){
    dl_h3.innerHTML = '手机重置密码';
    rewrite.style.display = 'block';
    dl_other.style.display = 'none';
    forget_mm.style.display = 'none';
    on_number.style.display = 'block';
    zm1.style.display = 'none';
    onyz.style.display = 'block';
    zm2.style.display = 'none';
    forget_mm.style.display = 'none';
    mail_r.style.display = 'block';
    zm_dl.style.display = 'block';
    mobile_dl.style.display = 'none';
    submit.innerHTML = '发送验证邮件';
})
zm_dl.addEventListener('click',function(){
    dl_other.style.display = 'block';
    dl_h3.innerHTML = '账密登录';
    on_number.style.display='none';
    zm1.style.display = 'block';
    onyz.style.display = 'none';
    zm2.style.display = 'block';
    forget_mm.style.display ='block';
    other_dl.style.display = 'none';
    mobile_dl.style.display = 'block';
    zm_dl.style.display = 'none';
    mail_r.style.display = 'none';
    
})

// 各个输入框获取焦点和失去焦点时熊猫照片的变化
in_number.addEventListener('click',function(){
    xm.src = 'images/xm2.png';
    on_number.style.border =  '1px solid #007fff';
})
in_number.addEventListener('blur',function(){
    xm.src = 'images/xm1.png';
    on_number.style.border =  '1px solid #eaeaea';
})
zm1.addEventListener('click',function(){
    xm.src = 'images/xm2.png';
    zm1.style.border =  '1px solid #007fff';
})
zm1.addEventListener('blur',function(){
    xm.src = 'images/xm1.png';
   zm1.style.border = '1px solid #eaeaea';
})
zm2.addEventListener('click',function(){
    xm.src = 'images/xm3.png';
    zm2.style.border =  '1px solid #007fff';
})
zm2.addEventListener('blur',function(){
    xm.src = 'images/xm1.png';
    zm2.style.border =  '1px solid #eaeaea';
})
yzm.addEventListener('click',function(){
    xm.src = 'images/xm2.png';
    onyz.style.border = '1px solid #007fff';
})
yzm.addEventListener('blur',function(){
    xm.src = 'images.xm1.png';
    onyz.style.border =  '1px solid #eaeaea';
})
