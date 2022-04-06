//jquery코드
//js링크가 먼저 일어나기 때문에 도큐먼트 레디를 사용함
$(document).ready(function() {

    //dark버튼
    $("#dark").click(function() {

        if($("#dark").hasClass("dark")) {

            $("body").css("backgroundColor", "black");
            $("p, a, h3").css("color", "white");
            $("#dark").html("밝게보기"); //innerHTML
            $("#dark").addClass("white"); //클래스속성 삭제
            $("#dark").removeClass("dark"); //클래스속성 추가

        }else {

            $("body").css("backgroundColor", "white");
            $("p, a, h3").css("color", "black");
            $("#dark").html("어둡게보기"); //innerHTML
            $("#dark").addClass("dark"); //클래스속성 삭제
            $("#dark").removeClass("white"); //클래스속성 추가
        }
    });

    //name버튼 이벤트
    $("#name").click(function() {

        if( $("#name").hasClass("name")) {

            $(".inner > p").html("설계자 : 브렌던 아이크<br> 개발자: 넷스케이프, 모질라 재단, Ecma 인터내셔널<br> 패러다임: 프로그래밍 패러다임: 스크립트 언어, 객체 지향 프로그래밍 (프로토타입 기반 프로그래밍), 명령형 프로그래밍, 함수형 프로그래밍, 사건 기반 프로그래밍");
            $(".inner > a").css("display", "none"); //가림
            $("#name").html("이름보기");
            $("#name").addClass("cont");
            $("#name").removeClass("name");

        }else {
            var str = "자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다.";

            $(".inner > p").html(str);
            $(".inner > a").css("display", "inline"); //가림
            $("#name").html("내용보기");
            $("#name").addClass("name");
            $("#name").removeClass("cont");

        }
    });


});