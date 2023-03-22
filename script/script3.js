let num1=10 
let num2=20 
let result //정의되지 않은 변수
num1-- 
console.log(num1) //9
num1++ 
console.log(num1) // 10
result=num2++
console.log(result) // 20
result=++num2
//result += ++num2 // 42
console.log(result) // 22
console.log('---------------------')
let age = window.prompt('당신의 나이는?')
console.log('올해 나이는 '+age+' 살입니다.')
// age++
console.log('내년 나이는 '+(++age)+' 살입니다.')
// 템플릿 문자열
console.log(`내년 당신의 나이는 ${++age}살입니다`)//변수로 별개처리하고 싶은 부분을 ${}로 [``벤틱기호 사용]
// 구구단
let dan99 = window.prompt('구구단 몇단이 궁금해요?')
//2x1=2
console.log(`1*${dan99}=${1*dan99}`)
console.log(`2*${dan99}=${2*dan99}`)
console.log(`3*${dan99}=${3*dan99}`)
console.log(`4*${dan99}=${4*dan99}`)
console.log(`5*${dan99}=${5*dan99}`)
console.log(`6*${dan99}=${6*dan99}`)
console.log(`7*${dan99}=${7*dan99}`)
console.log(`8*${dan99}=${8*dan99}`)
console.log(`9*${dan99}=${9*dan99}`)
//고정되는 부분과 유지되는 부분 구분