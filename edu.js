var edu_num=0

var eban=document.getElementsByClassName('eban');
var enext=document.getElementsByClassName('enext');
var eprev=document.getElementsByClassName('eprev');
var edu_banner=document.getElementsByClassName('edu_banner');

enext[0].addEventListener('click',function(){
    edu_num+=1;
    if(edu_num>eban.length-1){
        edu_num=eban.length-1;
    }
    else{
        var plus= edu_num*(-80);
        edu_banner[0].style.transform='translate('+plus+'vw)';
    }
})

eprev[0].addEventListener('click',function(){
    edu_num-=1;
    if(edu_num<0){
        edu_num=0;
    }
    else{
        var minus= edu_num*(-80);
        edu_banner[0].style.transform='translate('+minus+'vw)';
    }
})