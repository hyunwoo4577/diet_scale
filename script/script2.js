//원시데이터(논리형 데이터 true(1), false(0))
let a = false
let b = 1
console.log(a==b)
//원시데이터(null(빈),undefined(정의되지않은))
let c = 10 // 선언o 대입o
let d // 선언o 대입 x
c = null //대입된 후 특정상황에 따라 값을 제거할 경우 (이미 입력된값을 취소할 때)
console.log(c) //null
console.log(d) //undefined
//------------------------------------------
let e = 10
let f = '0'
console.log(e+f)
console.log('memo-----------------------------')
//산술연산자
let num1 = 10+20
let num2 = 50+20
let num3 = 5*1
let num4 = 6/3
let num5 = 5%2 //나머지값
console.log(num1,num2,num3,num4,num5)
console.log('---------------------------------')
let box1 = 1
box1 = 10
console.log(box1) //10
// box1 = box1+10
box1 += 10 //(복합연산자)
console.log(box1) //11
console.log('--------------------------')
let box2 = 0
box2 = box2+10 //복합대입 변경식 box2 +=10
console.log(box2) //결과값 예측 10
box2 = box2-5 //box2 -=5
console.log(box2) //5
box2 = box2*2 //box2 *=2
console.log(box2) //10
//이어져서 내려온다
box2 +='살 입니다.'
// window.alert(box2)
console.log('--------------------------')
let box3 = 10
console.log(box3) //증감연산자
console.log(box3++) //후위연산
console.log(++box3) //전위연산
box3++ //이미 46번줄에서 증가
console.log(box3) //46번 출력
let box4 = box3++
console.log(box4)


