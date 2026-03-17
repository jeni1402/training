
// object declare
const details={
    name :"jeni",
    age :23,
    class : "msc"
}
console.log(details)

// reference name
const details_1=details;
details_1.name="moni";
console.log("new name :"+details.name+"age : "+details.age)
 
// function constructor -object :
function Student_details(name,age,className){
this.name=name;
this.age=age;
this.class=className;
}

 const Student_details_1=new Student_details("jeni",22,12);
 console.log(Student_details_1);

// class constructor -object :
 class car_deatils {
    constructor (name , brand ,year){
        this.name =name,
        this.brand=brand;
        this.year=year;
    }
        getCarInfo(){
            return`car name ${this.name} car brand ${this.brand}`
            // console.log("car name :"+this.name +"car brand :"+this.brand)
        }

    }
 const car_deatils_1=new car_deatils("Tata","og",1992);
 console.log(car_deatils_1);
 console.log(car_deatils_1.getCarInfo())


// object iteration
const teachers_name ={
    tr_1 : "hemi",
    tr_2 :" jeni",
    tr_3 : "mani"
}
for (let x in teachers_name){    
         console.log( x+":"+teachers_name[x])
}

// copy object 
const tr=JSON.parse(JSON.stringify(teachers_name))
console.log(tr)
 
// console.log( Object.isFrozen(teachers_name));
// Object.freeze

// Object.seal(teachers_name);
teachers_name.tr_3 ="joni";
console.log(teachers_name)

delete teachers_name.tr_3
console.log(teachers_name)