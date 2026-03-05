// variables
let fname :string="jeni";
var age : number=22;
const place :string="Tvl"
console.log(fname,age,place)

// array
let numbers:number[]=[1,2,3,4,5]
for(let i=0;i<numbers.length;i++){
    console.log(i)
}
// objects
const names:{name_1:string,name_2:string,name_3:string}={
    name_1:"jeni",
    name_2 :"moni",
    name_3:"mani"

};
console.log(names)
// arrow
const sum =(x:number,y:number)=>{

    let z=x+y;
    console.log(z)
}
sum(2,3)



interface student{
    name:string,
    age:number,
    leave:boolean,
    mark:number
}
const Student :student={
    name:"jeni",
    age :22,
    leave:true,
    mark :455
};
console.log(Student)


function sample():void{
  console.log("hiiii")
}
sample()

function nameList(name :number,name2:number){
  return name +name2
}
console.log( nameList(5,5))