function countTime() {
    //获取当前时间  
    var date = new Date();
    var now = date.getTime();

    var year = date.getFullYear() // 年
    var month = date.getMonth() + 1; // 月
    var day = date.getDate(); // 日
    var hour = date.getHours(); // 时
    var minutes = date.getMinutes(); // 分
    var seconds = date.getSeconds() //秒

    var moment = year + "/" + month + "/" + day + " " + hour + ":" + minutes + ":" + seconds;

    //将倒计时赋值到div中  
    document.getElementById("moment").innerHTML = moment;
    setTimeout(countTime,1000); 
}