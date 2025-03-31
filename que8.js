function repeatedSum(num){
    while (num >=10){
        num=num.toString().split('').reduce((a,b)=> a+parseInt(b),0);
    }
    return num;
}
console.log(repeatedSum(345));
