var newsnum=document.getElementsByClassName('news_num');

var information = [
    {
        num:"31112",
        content:"중대본 '코로나19 계속 확산하면 다음주 특단조치 발표 가능성'",
        agency:"[연합뉴스]",
        day:"2021-12-10 11:40",
        site:"https://m.yna.co.kr/view/AKR20211210074400530"
    },
    {
        num:"31111",
        content:"코로나19 의료대응체계(전담병상) 강화 추진",
        agency:"[코로나바이러스감염증-19중앙사고수습본부]",
        day:"2021-12-10 11:06",
        site:"http://ncov.mohw.go.kr/tcmBoardView.do?brdId=&brdGubun=&dataGubun=&ncvContSeq=368858&contSeq=368858&board_id=&gubun=ALL"
    },
    {
        num:"31110",
        content:"코로나19 위중증 852명..신규 확진 7천 22명",
        agency:"[MBC뉴스]",
        day:"2021-12-10 09:41",
        site:"https://imnews.imbc.com/replay/2021/nw930/article/6322696_34929.html"
    },
    {
        num:"31109",
        content:"코로나19 예방접종 및 국내 발생 현황(12.10., 0시 기준)",
        agency:"[중앙방역대책본부 위기소통팀]",
        day:"2021-12-10 09:40",
        site:"http://ncov.mohw.go.kr/tcmBoardView.do?brdId=3&brdGubun=31&dataGubun=&ncvContSeq=6183&contSeq=6183&board_id=312&gubun=ALL"
    },
    {
        num:"31108",
        content:"코로나19 사망자 급증...화장장에 몰린 앰블런스",
        agency:"[동아일보]",
        day:"2021-12-10 03:10",
        site:"https://www.donga.com/news/Society/article/all/20211209/110716372/1"
    },
    {
        num:"31107",
        content:"코로나19 입원율, 영국 4.6%, 일본 14%...한국은 50% 왜?",
        agency:"[한겨레]",
        day:"2021-12-09 22:59",
        site:"https://www.hani.co.kr/arti/society/health/1022762.html"
    },
    {
        num:"31106",
        content:"강원 코로나19 확산세 심각...오늘 150명, 역대 최고치 경신",
        agency:"[KBS뉴스]",
        day:"2021-12-09 21:38",
        site:"https://news.kbs.co.kr/news/view.do?ncd=5345084"
    },
    {
        num:"31105",
        content:"코로나19 백신 연령별 이상반응 신고율",
        agency:"[연합뉴스]",
        day:"2021-12-09 15:37",
        site:"https://www.yna.co.kr/view/GYH20211209001300044"
    },
    {
        num:"31104",
        content:"엉겁결에 집단면역? 일본 코로나 급감 '미스터리'",
        agency:"[한겨레]",
        day:"2021-12-09 15:10",
        site:"https://www.hani.co.kr/arti/international/japan/1022652.html"
    },
    {
        num:"31103",
        content:"유럽의약품청 '코로나19 백신 교차 접종 가능'",
        agency:"[KBS뉴스]",
        day:"2021-12-08 01:43",
        site:"https://news.kbs.co.kr/news/view.do?ncd=5343229"
    }
]
for(var i=0; i<information.length; i++){
    var newsinfo=''
    var info=information[i];
    newsinfo="<td>"+info.num+"</td>"
    +"<td style='width:500px'><a href='"+info.site+"' style='text-decoration:none; color: black;'>"+info.content+"</a></td>"
    +"<td>"+info.agency+"</td>"
    +"<td>"+info.day+"</td>";
    newsnum[i].innerHTML=newsinfo;
}