// const { default: axios } = require("axios");

let tips = document.querySelector('.tips');
let password_input = document.querySelector('.password-input');
let username_input = document.querySelector('.username_input');
let userId;
let yhs =document.querySelector('.yhs');
let yhsi = document.querySelector('.yshi')
//登录页面的使用账号密码登录
// 1.当提交按钮被点击的时候
submit.onclick = function(){
    // 获取输入框里面的内容分别为账号和密码
    let username = username_input.value;
    let password = password_input.value;
    // 在响应结果还没有出现的时候显示登录中
    submit.value = '登录中.....';
    submit.style.background = 'grey';
    // 调用接口，使其登录
    axios.post('http://47.100.42.144:3389/user/login',{  username:username,  password:password
}).then(function(res){  
    console.log(res.data);
    // 确认该接口中有该用户的数据
    if(res.data.data.message ==='该用户已登录'){
        console.log('111');
        tips.style.display = 'block';
        tips.innerHTML = '登录成功';
        cover.style.display = 'none';
        dlym.style.display = 'none';
        dl_float.style.display = 'none';
        // 获取用户的ID后面方便获取数据
        userId = res.data.data.userId;
        console.log(userId);
        // 调用查看用户信息的接口
        axios.get('http://47.100.42.144:3389/user/getUserInfo?userId='+userId+'').then(function(res){
            yhs.style.display = 'block';
            console.log(res.data.data.avatar);
        // 头像问题还没有解决
        }).catch(function(err){
            console.log(err);
        })
        setTimeout(function(){
            tips.style.display = 'none';
        },3000);
    }
    if(res.data.data.message ==='登录失败'){
        tips.innerHTML = '账号或者密码错误';
        submit.value = '登录';
        submit.style.background = '#007fff';
    }
}).catch(function(err){  
    console.log(err);
    
});
}
