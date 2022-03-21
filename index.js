const newYear="1 Jan 2022";

const Days=document.getElementById("days");
const Hours=document.getElementById("hours");
const Mins=document.getElementById("minutes");
const Seconds=document.getElementById("seconds");

function clock() {
    const newDate=new Date(newYear);
    const currentDate=new Date();
    const totalSecond=(currentDate-newDate)/1000;

    const day=Math.floor(totalSecond/3600/24);
    const hour= Math.floor(totalSecond/3600)%24;
    const minute= Math.floor(totalSecond/60)%60;
    const second= Math.floor(totalSecond)%60;

    Days.innerHTML=day;
    Hours.innerHTML=format(hour);
    Mins.innerHTML=format(minute);
    Seconds.innerHTML=format(second);
    
    
}


function format(time){
    return time < 10 ? `0${time}` : time;
}

clock();

setInterval(clock,1000);
