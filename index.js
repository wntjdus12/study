let score= 0;
for(let i=1; i<= 100;i++){
   console.log("s",score += i); 
};

let odd= 0;
for(let i=1; i<= 100;i+=2){
   console.log("o",odd += i); 
};


// 36 -> 짝짝 -> stringValue.length => 2
for(let i=1; i<=50; i++){
    let stringValue = i.toString() // 숫자 타입을 string 타입으로 바꾸는 함수 
    let result = ""
    for(let j=0; j<stringValue.length; j++){
      if(stringValue[j] == "3" || stringValue[j] == "6" ||stringValue[j] == "9" ){
        result+="짝"
      }
    }
    console.log(result.length>0?result:i) //짝이 나온 값이 0보다 크면 3,6,9에 해당되는거니까 result 를 보여주고 결과값이 0보다 작으면 3,6,9에 해당이 되지않은거니까 숫자를 보여준다.
  }




//소수면 true, 소수가 아니면 false
let n =7;
let minority = true;

if (n === 1){
    minority = false;
}else{
    for(let i=2; i<n; i++){
      if(n % i == 0){
        minority =  false;
      }
    }
}

console.log(minority)


function greet (){
  console.log("안녕 내 이름은 제시카야");

}
greet();



function print(name){
  console.log("안녕 내 이름은 "+ name + "이야");
}

print("주서연");


function print(name){
  console.log("안녕 내 이름은 " + name + "이야");
  return name;
}

const name = print("주서연");


// function meetAt (year, month, day){
//   if(day){
//     return `${year}/ ${String(month).padStart(2, '0')}/ ${String(day).padStart(2, '0')}`;
//   }
//   else if(month){

//     return `${year}년 ${String(month).padStart(2, '0')}월`
    
//   }
//   else if(year){
//     return `${year}년 `
//   }

// } // 월이나 요일이 숫자가 하나일때는 앞에 0을 붙혀주는 로직을 더해보았습니다.

// console.log(meetAt(2025, 2, 14));



function findSmallestElement (arr){
    if( arr.length <=0 ){
      return 0;
    }
    let result = arr[0];
    for(let i = 1; i < arr.length; i++){
      if( result > arr[i]){
        result = arr[i];
      }
    }
    return result;

}

console.log(findSmallestElement([100,200,3,5,2,1]))

let unit = [50000,10000,5000,1000,500,100]
function changeMoney (money){
    for (let i=0; i < unit.length; i++){
      let num = Math.floor( money / unit[i]);
       money = money - (unit[i] * num);
       console.log(`${unit[i]} X ${num}`)
    }
}

changeMoney(12300);

// 50000 X 0
// 10000 X 1
// 5000 X 0
// 1000 X 2
// 500 X 0
// 100 X 3


let = 0;