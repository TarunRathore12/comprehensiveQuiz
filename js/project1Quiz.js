const cAns = ['c','d','a','c','b','c','d','a','c','b'];
let x = document.querySelector('form');
let innerAns = document.getElementById('per');
let minutes = document.getElementById('minutes');
let sec = document.getElementById('sec');
let rbutton = document.getElementById("checkResult");
let scount=60,mcount=9;
let stopTimer = setInterval(()=>{
    if(scount==0){
        mcount--;
        scount=60;
    }
    else{
        scount--;
    }
    minutes.textContent = mcount;
    sec.textContent = scount;
    if(scount==0 && mcount==0){
        clearInterval(stopTimer);
        rbutton.click();
    }
},1000);
function checkResult(){
    clearInterval(stopTimer);
    const userAns = [x.opt1.value,x.opt2.value,x.opt3.value,x.opt4.value,x.opt5.value,x.opt6.value,x.opt7.value,x.opt8.value,x.opt9.value,x.opt10.value];
    let result = 0;
    userAns.forEach((ans,index) => {
        if(ans === cAns[index]){
            result+=10;
        }
    });
    let output=0;
    const timer = setInterval(() => {
        innerAns.innerHTML=`${output}%`;
        if(output===result){
            clearInterval(timer);
        }
        else
        output++;
    },30);

}
const nodeList=[x.opt1,x.opt2,x.opt3,x.opt4,x.opt5,x.opt6,x.opt7,x.opt8,x.opt9,x.opt10];
function checkAns(){
    window.scrollTo(0, 0);
    rbutton.disabled=true;
    const userAns = [x.opt1.value,x.opt2.value,x.opt3.value,x.opt4.value,x.opt5.value,x.opt6.value,x.opt7.value,x.opt8.value,x.opt9.value,x.opt10.value];
    for(let i=0;i<10;i++){
        if(cAns[i]===userAns[i]){
            if(cAns[i]==='a'){
                nodeList[i][0].parentElement.classList.add('text-info');
                nodeList[i][0].parentElement.classList.add('h5');
                nodeList[i][0].parentElement.innerHTML+='<span style="color:white"> [Selected Correct Option]</span>';
            }
            else if(cAns[i]==='b'){
                nodeList[i][1].parentElement.classList.add('text-info');
                nodeList[i][1].parentElement.classList.add('h5');
                nodeList[i][1].parentElement.innerHTML+='<span style="color:white"> [Selected Correct Option]</span>';
            }
            else if(cAns[i]==='c'){
                nodeList[i][2].parentElement.classList.add('text-info');
                nodeList[i][2].parentElement.classList.add('h5');
                nodeList[i][2].parentElement.innerHTML+='<span style="color:white"> [Selected Correct Option]</span>';
            }
            else if(cAns[i]==='d'){
                nodeList[i][3].parentElement.classList.add('text-info');
                nodeList[i][3].parentElement.classList.add('h5');
                nodeList[i][3].parentElement.innerHTML+='<span style="color:white"> [Selected Correct Option]</span>';
            }
        }
        else{
            if(cAns[i]==='a'){
                nodeList[i][0].parentElement.classList.add('text-info');
                nodeList[i][0].parentElement.classList.add('h5');
                nodeList[i][0].parentElement.innerHTML+='<span style="color:white"> [Correct Option]</span>';
            }
            else if(cAns[i]==='b'){
                nodeList[i][1].parentElement.classList.add('text-info');
                nodeList[i][1].parentElement.classList.add('h5');
                nodeList[i][1].parentElement.innerHTML+='<span style="color:white"> [Correct Option]</span>';
            }
            else if(cAns[i]==='c'){
                nodeList[i][2].parentElement.classList.add('text-info');
                nodeList[i][2].parentElement.classList.add('h5');
                nodeList[i][2].parentElement.innerHTML+='<span style="color:white"> [Correct Option]</span>';
            }
            else if(cAns[i]==='d'){
                nodeList[i][3].parentElement.classList.add('text-info');
                nodeList[i][3].parentElement.classList.add('h5');
                nodeList[i][3].parentElement.innerHTML+='<span style="color:white"> [Correct Option]</span>';
            }
            if(userAns[i]==='a'){
                nodeList[i][0].parentElement.classList.add('text-danger');
                nodeList[i][0].parentElement.classList.add('h5');
                nodeList[i][0].parentElement.innerHTML+='<span style="color:white"> [Selected Wrong Option]</span>';
                if(i==5)
                console.log("in if for 6th");
            }
            else if(userAns[i]==='b'){
                nodeList[i][1].parentElement.classList.add('text-danger');
                nodeList[i][1].parentElement.classList.add('h5');
                nodeList[i][1].parentElement.innerHTML+='<span style="color:white"> [Selected Wrong Option]</span>';
            }
            else if(userAns[i]==='c'){
                nodeList[i][2].parentElement.classList.add('text-danger');
                nodeList[i][2].parentElement.classList.add('h5');
                nodeList[i][2].parentElement.innerHTML+='<span style="color:white"> [Selected Wrong Option]</span>';
            }
            else if(userAns[i]==='d'){
                nodeList[i][3].parentElement.classList.add('text-danger');
                nodeList[i][3].parentElement.classList.add('h5');
                nodeList[i][3].parentElement.innerHTML+='<span style="color:white"> [Selected Wrong Option]</span>';
            }
        }
    }
}