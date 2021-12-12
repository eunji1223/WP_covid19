var num=0

var ban=document.getElementsByClassName('ban');
var next=document.getElementsByClassName('next');
var prev=document.getElementsByClassName('prev');
var banner=document.getElementsByClassName('banner');

next[0].addEventListener('click',function(){
    num+=1;
    if(num>ban.length-1){
        num=ban.length-1;
    }
    else{
        var plus= num*(-80)
        banner[0].style.transform='translate('+plus+'vw)';
    }
})

prev[0].addEventListener('click',function(){
    num-=1;
    if(num<0){
        num=0
    }
    else{
        var minus= num*(-80)
        banner[0].style.transform='translate('+minus+'vw)';
    }
})

