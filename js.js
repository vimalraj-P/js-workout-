// var a=9
// var b=2
// console.log(a%b); //% find the reminder 

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
// === well chick the value and data type

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
    // function hi(){
    //   bye()
    //   console.log("hi");
    // }
    // function bye(){
    //   console.log("bye");
    //   hello()
    // }
    // function hello(){
    //   console.log("hello");
    //   hi()
    // }
    // hi()


    // array methods

    // muted oreginal array//directly offected the array
    // const a = [1,2,3,4,5,6,7]
    // console.log(a.length);     */find the totallength/*

    // push method
    // a.push(10)
    // console.log(a);     
    // * push adding the new element in last

    // pop method
    // a.pop()
    // console.log(a);
    /*pop method removing the last element*/

    // unshift 
    // a.unshift(0)
    // console.log(a);
    /*unshift adding the new element in first*/

    // shift
    // a.shift()
    // console.log(a);
    // shift is removing the first element

    // splice
    // a.splice(0,3,7,8)
    // console.log(a);
    /*splice method using to remove and adding the elements*/

    // reverse
    // a.reverse()
    // console.log(a);
    /*reverse the  all elements*/

    // sort
    // a.sort((a,b)=>b-a)
    // console.log(a);
    /*sort is change the element in assending order to desinding order and desinding order to assending order*/

    // fill
    // a.fill(30,1,3)
    // console.log(a);
    /*fill the one new number to chooseing numbe of the elements*/
    

    // /*new array*/create the new array
    // *one function is an call the another function that name is call back function//
    
    // const a =[18,82,43,42,15,26,27,38,19,19]
    //  map (looping)
     
      //  const ans = a.map((n)=>n*2)
      //  console.log(ans);
    
    // filter //
        // const ans =a.filter((n)=>n%2>=18)
        // console.log(ans);

    // slice //cut the element
    // console.log(a.indexOf(15));
    // console.log(a.slice(-4,-3));
    
    // concat//*concat is merch the one array to another array*
    // const a=[1,2,3,4,5]
    // const b=[5,6,7,8,9]
    // const c =[11,10,12,13,14]

    // console.log(a.concat(b,c));

    // flat
    const a = [1,[2,3],4,5,[6,[7,[8]]]]
     console.log(a.flat(3));