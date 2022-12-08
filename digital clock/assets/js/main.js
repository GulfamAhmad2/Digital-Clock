const hours = document.querySelector("#hour"),
minutes =  document.querySelector("#minute"),
seconds =document.querySelector("#second"),
am_pm = document.querySelector(".am_pm");
// console.log(am_pm)

setInterval(()=>{
    let date = new Date();
    // for hours
    let hour = date.getHours();
    
    // for min
    let minute = date.getMinutes();
    minutes.innerHTML = minute;
    // for sec
    let second = date.getSeconds();
    seconds.innerHTML = second;
    // for am-pm
    let amPm = hour < 12 ? "AM" : "PM";
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;
    hours.innerHTML = hour;
    am_pm.innerHTML = amPm;
    
},1000)