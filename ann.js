var sec_pre=document.getElementsByClassName('sec_pre');

var person = [
    {
        name: "일반인",
        site: "http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=21",
        img: "./images/indiv.png"
    },
    {
        name: "입주자 및 여행객",
        site: "http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=23",
        img: "./images/travel.png"
    },
    {
        name: "자가격리자",
        site: "http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=22",
        img: "./images/selfq.png"
    },
    {
        name: "의료 기관",
        site: "http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=24",
        img: "./images/doctor3.png"
    },
    {
        name: "집단 및 다중 이용시설",
        site: "http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=25",
        img: "./images/group.png"
    },
    {
        name: "지자체",
        site: "http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=28",
        img: "./images/localgov.png"
    },
    {
        name: "기업 및 시장",
        site: "http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=26",
        img: "./images/corpor.png"
    }
]

for(var i=0; i<person.length; i++){
    var personhtml="";
    personhtml="<a href='"+person[i].site+"' style='text-decoration:none; color: black;'>"
    +'<img src="'+person[i].img+'" style="width:30px; height:30px;"/>'
    +person[i].name+"</a>"
    sec_pre[i].innerHTML= personhtml;
}