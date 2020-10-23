const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

    function getTime(){
        /*날짜를 가져오는 변수 */
        const date = new Date();
        /*분을 가져오는 변수*/ 
        const minutes = date.getMinutes();
        /*시간을 가져오는 변수*/
        const hours = date.getHours();
          /*초을 가져오는 변수*/
        const second = date.getSeconds();
        /*시간, 분, 초 출력 (초가 10 보다 작으면? 0+초, 아니면 초) */
        clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
                second <10 ? `0${second}` : second}`;
    }
function init(){
    /*시간 출력*/
getTime();
/*1초마다 getTime을 갱신*/
setInterval(getTime,1000);
}

init()