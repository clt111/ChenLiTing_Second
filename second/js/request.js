function request(){
    let xhr =  new XMLHttpRequest;
     xhr.onreadystatechange = function () {
          if (this.readyState == 0) {
                     console.log("UNSENT open 尚未调用");
             } else if (this.readyState == 1) {
                     console.log("OPEND open 已调用");
             } else if (this.readyState == 2) {
                     console.log("接收头消息");
             } else if (this.readyState == 3) {
                     console.log("接收响应主体");
            } else {
                     console.log(JSON.parse(this.responseText));
                 }
             };
             xhr.open('GET', "http://47.100.42.144:3389");
             xhr.send();
         }