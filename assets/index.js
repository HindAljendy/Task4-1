//  code array

// index:   0 1 2 3 4 5 6 7 8 9
var array=[1,2,3,4,5,6,7,8,9,10];

var sum=0;
for(var index=0; index<array.length; index++){
    if(array[index] % 2 == 0){
        console.log(array[index]); 
        document.write(array[index]+"<br>")
        
    }
    if(index<5){
        sum+=array[index];
    }
}
        console.log(sum);
        document.write(sum +"<br>");


//  code object

var object={
    name:"hind",
    number:945632399,
    age:25,
    email:'hind@gmail.com'
}
document.write(object+"<br>");
console.log(object);



document.write(object['name']+"<br>");
console.log(object.name);
document.write(object['number']+"<br>");
console.log(object.number);
document.write(object['age']+"<br>");
console.log(object.age);
document.write(object['email']+"<br>");
console.log(object.email);





