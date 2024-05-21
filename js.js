// var a=9
// var b=2
// console.log(a%b); 

// increment
// var a=5
 //pre increment  (++a)
//   console.log(++a);

// post increment
// a++
// console.log(a);

// comparisem
// var a="10"
//  var b="10"

// console.log(a===b);

// console.log(a!==b); 
// !=> not is changeing the bollien answer
//     eg : anwer is true not give to the answer false

    // logical operators
    // AND
    // var a=18
    // var b=20
    // console.log(a<20 && b>20); //using one & value comes 0/1 0 meaning false ,1 meaning true

    //    OR
    //    var a=18
    //    var b=20
    //    console.log(a<20 || b>20); 
    // using one | value comes 0/1 0 meaning false ,1 meaning true

    // not 
    //    var a=18
    //    var b=20
    //    console.log(!(a<20 || b>20)); 
        
    // array -----[]

    // const a = [1,2,3,4,5]
    // index -- [0,1,2,3,4]

    // console.log(a[1]);

    // object
    // const student = {
    //     name : "vimal",
    //     age : "22",
    //     mobile : 7604991189,
    //     address :{
    //         line1 : "no05",
    //         line2 : "2 street" ,
    //         city : "chennai",
    //         pincode : 600097
    //     },
    //     skill: ["html","css","bootstrap"]
    // }

    // console.log(student.skill[1]);

    // array of object

    // const classA = [
    //     {
    //         name : "vimal",
    //         age : "22",
    //         mobile : 7604991189,
    //         address :{
    //             line1 : "no05",
    //             line2 : "2 street" ,
    //             city : "chennai",
    //             pincode : 600097
    //         }
    //     },
    //     {
    //         name : "dinesh",
    //         age : "29",
    //         mobile : 7604991189,
    //         address :{
    //             line1 : "no05",
    //             line2 : "2 street" ,
    //             city : "chennai",
    //             pincode : 600097
    //         }
    //     },
    //     {
    //         name : "yuvaraj",
    //         age : "19",
    //         mobile : 7604991189,
    //         address :{
    //             line1 : "no05",
    //             line2 : "2 street" ,
    //             city : "chennai",
    //             pincode : 600097
    //         }
    //     }
    
    // ]

    // console.log(classA[1].name);

    // functions
    /*
      Decleration function  (parameter function/parameter less function)
      Expression function
      Arrow functions
    */ 

    //   syntax
    //   Decleration function
    //   parameter less function
    // function print ( ) {
    //     console.log("i am vimal");
    // }

    // print()

    // parameter function
    // function add (a,b){
    //   console.log(a+b);
    // }
    // add(9,8)
    // add(3,8)
    // add(9,5)
    // add(5,8)
    // add(9,1)

    //  Expression function */expression fuctions give the value after the console,log/*
    // const add =function(a,b){
    //   console.log(a+b);
    // }
    //   add(9,1)
 
    // Arrow function
    // const add1 = (a,b)=>console.log(a+b);
    // add1(10,9)


    // call back function
                            // unlimited looping name is call back dell 
    function hi(){
      bye()
      console.log("hi");
    }
    function bye(){
      console.log("bye");
      hello()
    }
    function hello(){
      console.log("hello");
      hi()
    }
    hi()