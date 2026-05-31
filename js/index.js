function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //add 0
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = hours + ':' + minutes + ':' + seconds;
    let days = ["0", "1", "2", "3", "4", "5", "6"];
    let dayString = days[now.getDay()];
    let timeElement = document.querySelector('.nav li:last-child');

    if (timeElement) {
        timeElement.textContent = timeString + ' | ' + dayString;
    }
}
updateTime();
setInterval(updateTime, 1000);


{   //Link
    let xzcx = document.getElementById('xzcx');
    xzcx.addEventListener('click',function(){
        open("https://www.xzcx.net.cn/");
    })
}
