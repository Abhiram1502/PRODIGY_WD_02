let hour=document.getElementById('hour');
let minute=document.getElementById('minute');
let second=document.getElementById('second');
let start=document.getElementById('start');
let cSecond=document.getElementById('mSecond')
let stp=document.getElementById('stop');
let reset=document.getElementById('reset');
let hours=0;
let minutes=0;
let seconds=0;
let bool= false; 
start.addEventListener('click',function(){
    if(!bool){
        bool= true;
        stopWatch();
    }
});
stp.addEventListener('click',function(){
    bool= false;
});

let count= 0 ;
function stopWatch(){
    if(bool){
        count++;
        document.getElementsByTagName('title')[0].innerHTML='';
        if(count==100){
            seconds++;
            count=0;
        }
        if(seconds==60){
            minutes++;
            seconds=0;
        }
        if(minutes==60){
            hours++;
            minutes=0;
        }
        let countStr=count;
        let hrString=hours;
        let minString=minutes;
        let secString=seconds;
        if(count<10){
            countStr="0"+countStr;
        }
        if(seconds<10){
            secString="0"+secString;
        }
        if(minutes<10){
            minString="0"+minString;
        }
        if(hours<10){
            hrString="0"+hrString;
        }
        cSecond.innerHTML=countStr;
        second.innerHTML=secString;
        minute.innerHTML=minString;
        hour.innerHTML=hrString;
        document.getElementsByTagName('title')[0].innerHTML=`${minString}:${secString}:${countStr}`;
        setTimeout(stopWatch,10);
    }
}
function displayDate(){
    const currentDate=new Date();
    const date=currentDate.toLocaleDateString();
    let time=currentDate.toLocaleTimeString();
    document.getElementById("dAT").innerHTML=`Date: ${date} <br> Time: ${time}`;
}
setInterval(displayDate, 1000);
reset.addEventListener('click',function(){
    hours=0;
    minutes=0;
    seconds=0;
    bool= false; 
    cSecond.innerHTML='00';
    second.innerHTML='00';
    minute.innerHTML='00';
    hour.innerHTML='00';
});
function showInfo(){
    document.getElementById("info").style.display='flex';
}
function hideInfo(){
    document.getElementById("info").style.display='none';
}