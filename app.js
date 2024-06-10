let n =5;
if (n%2===0){
    console.log("Even");
}
else{
    console.log("odd");
}

let prod=1;
for (let i=1;i<=n;i++){
    prod*=i
}
console.log(prod);

let prime=true;
for (let i=2;i<n;i++){
    if(n%i===0){
        prime=false;
        break;
    }
}
if(prime){
    console.log("Prime");
}
else{
    console.log("Not prime");
}


let a = 0;
let b = 1;
let series=""
for (let i =1;i<=n;i++){
    c=a+b;
    series+=c.toString()+" "
    a=b;
    b=c
}
console.log("0 "+"1 "+series);

let string=""
for(let i=1;i<n;i++){
    for(let j=1;j<n;j++){
        string+="* ";
    };
    string+="\n";
}
console.log(string);

let righttriangle =""
for (let i =1;i<=n;i++){
    for (let j=1 ;j<=i;j++){
        righttriangle+="*"
    }
    righttriangle+="\n"
}
console.log(righttriangle);

let invertrighttriangle="*"
for(let i =1;i<=n;i++){
    for (let j=i;j<=n;j++){
        invertrighttriangle+="*"
    }
    invertrighttriangle+="\n"
}
console.log(invertrighttriangle);

let spacesrighttriangle=""
for(let i = 1;i<=n;i++){
    for (let j =1;j<=n-i;j++){
        spacesrighttriangle+=" "
    }
    for (let k =1;k<=i;k++){
        spacesrighttriangle+=("*")
    }
    spacesrighttriangle+="\n"
}
console.log(spacesrighttriangle);

let spacesinvertedtriangle=""
for(let i = 0;i<n;i++){
    for (let j =0;j<i;j++){
        spacesinvertedtriangle+=" "
    }
    for (let k =i;k<n;k++){
        spacesinvertedtriangle+="*"
    }
    spacesinvertedtriangle+="\n"
}
console.log(spacesinvertedtriangle);

let arr=[1,2,3,1,2,3,7,899,78,87,43,23,3,43]
let unique = []
for (let i of arr){
    if(!unique.includes(i)){
        unique.push(i)
    }
}
console.log(unique);

let str="Akhilsaiakhiiiiilll";
let arr1 =[]
let obj={}
for(let i in str){
    arr1.push(str[i])
}

for(let i of arr1){
    if(i in obj){
        obj[i]+=1
    }
    else{
        obj[i]=1
    }
}
console.log(obj);


let sum = 0;
let length=arr.length;
for (let i of arr){
    sum+=i
}
let average=parseInt(sum/length)
console.log(average);

for (let i in obj){
    console.log(i+":"+obj[i]);
}

