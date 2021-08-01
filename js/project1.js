function myFunction(){
    document.getElementById("hiddenBtn").click();
}
let sbutton = document.getElementById('sButton');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let mcount = 4, scount = 60;
sbutton.addEventListener('click',()=>{
    let stopTimer = setInterval(()=>{
        if(scount==0){
            mcount--;
            scount=60;
        }
        else
            scount--;
        if(scount==0 && mcount==0){
            clearInterval(stopTimer);
            document.getElementById('toQuiz').click();
        }
        min.innerText=mcount;
        sec.innerText=scount;
    },1000);
});