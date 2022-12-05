var conHeader = document.querySelector('.header');
var content1 = document.querySelector('.content1');
var content2 = document.querySelector('.content2');
var content3 = document.querySelector('.content3');
var content4 = document.querySelector('.content4');

var pathH = document.querySelector('.path1')
var path1 = document.querySelector('.path2')
var path2 = document.querySelector('.path3')
var path3 = document.querySelector('.path4')
var path4 = document.querySelector('.path5')

var path1Length = path1.getTotalLength()
var path2Length = path2.getTotalLength()
var path3Length = path3.getTotalLength()
var path4Length = path4.getTotalLength()

// var pathHLength = pathH.getTotalLength();
// console.log(pathHLength)


path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;

path2.style.strokeDasharray = path2Length;
path2.style.strokeDashoffset = path2Length;

path3.style.strokeDasharray = path3Length;
path3.style.strokeDashoffset = path3Length;

path4.style.strokeDasharray = path4Length;
path4.style.strokeDashoffset = path4Length;

/* window.addEventListener('scroll',function(){
    scrollHandler();
}) */
/* scroll해서 단지 무언가를 호출하고 싶을 때 간략하게 아래와 같이 표기할 수 있다 */
window.addEventListener('scroll', scrollHandler)

function scrollHandler(){
    var scrollY = window.scrollY + (window.innerHeight * 0.8);
    path1.style.strokeDashoffset = calDashoffset(scrollY, content1, path1Length);
    path2.style.strokeDashoffset = calDashoffset(scrollY, content2, path2Length);
    path3.style.strokeDashoffset = calDashoffset(scrollY, content3, path3Length);
    path4.style.strokeDashoffset = calDashoffset(scrollY + 200, content4, path4Length);
}

// element는 content1을 받음
function calDashoffset(scrollY, element, length){
    var ratio = (scrollY - element.offsetTop)/ element.offsetHeight
    var value = length - (length*ratio)

    // 삼황연산자
    // 조건문?true일때실행문:false일때실행문;
    return value<0?0:value>length?length:value;
    // 0~1000사이의 값
    // return은 명령문 종료를 의미. 그 밑의 실행문은 실행되지 않는다.
}