//DOM (태그를 담아주는 모델)
//원시테이터(문자)="",'','표시문자','class','id','tag'
const container/* 내가 부여한 상수 */ = document.getElementById('container')//태그를 불러오기 위한 문자 데이터'container'
const item = document.getElementsByClassName('item')
console.log(container,item)
console.log(item[1].length)//문자열이 아닌 클래스이기 때문에 undefined가 나온다
console.log(typeof item[1])//위의 문제로 오류가 떴을 때
console.log(typeof item[1].innerHTML)//연산자로 속성
console.log(item[1].innerHTML.length)
//객체.속성.속성....o 
//but 객체.메서드().메서드().메서드()x
//객체.속성.속성.속성.메서드() o
//원시데이터(숫자) = '1' vs 1 = x
let a = 10
let b = '20'
let c = 20
console.log(a+b)//숫자+문자=문자
console.log(a+c)//숫자+숫자=숫자
//------------------------------------
let num = window.prompt('좋아하는 숫자를 입력하세요')//prompt 질의응답을 할 수 있다//데이터저장변수
let total = Number(num)//total데이터 변환-데이터변환변수
console.log(total, num)
console.log(typeof total)//명시적형변환때문에number로출력되는에러


