let time = document.querySelector(".time");
let stop = document.querySelector(".stop");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let isStart = false;
 
let min = 0;
let sec = 0;
let  msec = 0;
function timer() {
    time.innerHTML = `0${min}:0${sec}:0${msec}`;

    start.addEventListener('click', (e) => {
        e.preventDefault();
        isStart = true;
    })
    stop.addEventListener('click', (e) => {
        e.preventDefault();
        isStart = false;
    })
    reset.addEventListener('click', () => {

        isStart = false;
           
          min = 0;
          sec = 0;
           msec = 0;
        time.innerHTML = ` 0${min}:0${sec}:0${msec}`
    })
    if (isStart)
         {
        msec++;
        if (msec === 100)
             {
            msec = 0;
            sec++;
            if (sec === 60) 
                {
                sec = 0;
                 min++;
            }
        }
    }
}

setInterval(timer,10)

 