var days = document.getElementById("day");
var hours = document.getElementById("hour");
var minutes = document.getElementById("minute");
var seconds = document.getElementById("second");
var setTIMER = new Date(2021, 4, 10, 4, 35, 30).getTime();
console.log(setTIMER);
var currTIME = new Date().getTime();

var count = 0;
var mytime = setInterval(() => {
    count += 1000;
    let Diff = Number(setTIMER) - Number(currTIME);
    let diff = Diff - count;
    console.log(diff);
    let gdate = new Date(diff);
    let datediff = Number(new Date(gdate).getDate());
    days.innerHTML = datediff;
    hours.innerHTML = Number(gdate.getHours());
    minutes.innerHTML = Number(gdate.getMinutes());
    seconds.innerHTML = Number(gdate.getSeconds());

    if (Number(seconds.innerHTML) == 0) {

        let min = document.getElementById("counter3");
        min.style.transform = "rotateX(360deg)";

    }else if(Number(seconds.innerHTML) == 15){
        location.reload();
    }

    if (Number(minutes.innerHTML) == 0) {
        let hour = document.getElementById("counter2");
        hour.style.transform = "rotateX(360deg)";
    }
    if (Number(hours.innerHTML) == 0) {
        let day = document.getElementById("counter1");
        day.style.transform = "rotateX(360deg)";
    }

    if (Number(setTIMER) <= Number(currTIME)) {
        clearInterval(mytime);
    }



    // if(Number(seconds.innerHTML)==0){
    //     let fliper=document.getElementsByClassName("counter")[2];
    //     fliper.setAttribute("class","flip");
    // }else if(Number(minutes.innerHTML)==0){
    //     let fliper=document.getElementsByClassName("counter")[1];
    //     fliper.setAttribute("class","flip");
    // }else if(Number(hours.innerHTML)==0){
    //     let fliper=document.getElementsByClassName("counter")[0];
    //     fliper.setAttribute("class","flip");
    // }else{
    //     let fliper=document.getElementsByClassName("counter");
    //     for(let i=0;i<fliper.length;i++){

    //         fliper[i].setAttribute("class","blank");
    //     }
    // }

}, 1000);


