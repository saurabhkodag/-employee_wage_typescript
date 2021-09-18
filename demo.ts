
//UC1 attendance
// let emp:number=Math.floor(Math.random()*10%2)

// if(emp==0){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }

//UC2 daily wage

// let fulltime:number=8;
// let wageperhour:number=20;
// let empwage:number=0;
// empwage=fulltime*wageperhour;
// console.log(empwage);

// console.log(empwage);

//UC4 switch case
// let fulltime:number=8;
// let parttime:number=4;
// let wageperhour:number=20;
// let emphrs:number=0;
// let empwage:number=0;
// let key:number =Math.floor(Math.random()*10%3)
// switch(key){
//     case 0:
//     emphrs=fulltime;
//     break;
//   case 1:
//     emphrs=parttime;
//     break;
//   default:
//     emphrs=0;
// }
// empwage+=emphrs*wageperhour;
// console.log(empwage);


//UC5 MOntly_Wage
// let fulltime:number=8;
// let parttime:number=4;
// let wageperhour:number=20;
// let emphrs:number=0;
// let empwage:number=0;
// let i:number=1;
// while(i<=20){
// let key:number =Math.floor(Math.random()*10%3)
// switch(key){
//     case 0:
//     emphrs=fulltime;
//     break;
//   case 1:
//     emphrs=parttime;
//     break;
//   default:
//     emphrs=0;
// }
// empwage+=emphrs*wageperhour;
// i++;
// }
// console.log(empwage);


//UC6
// let data=require('./constant');
// var emphrs:number=0;
// var empwage:number=0;
// var totalhrs:number=0;
// var i:number=0;
// while(i<=20){
// let key:number =Math.floor(Math.random()*10%3)
// switch(key){
//     case 0:
//     emphrs=data.fulltime;
//     break;
//   case 1:
//     emphrs=data.parttime;
//     break;
//   default:
//     emphrs=0;
// }
//   totalhrs+=emphrs;
//   empwage+=emphrs*data.wageperhour;

// if(totalhrs>=160)
// break;
// i++;
// }
// i--;
// console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);


//UC7
// console.log("welcome to employee wage compatation");
// function attendance_check(){
// const is_Absent=0;
// let emp:number=Math.floor(Math.random()*10%2)

// if(emp==1){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }
// }
// function Daily_Wage(){
//     let fulltime:number=8;
// let wageperhour:number=20;
// let empwage:number=0;
// empwage=fulltime*wageperhour;
// console.log(empwage);
// }
// function Part_time(){
//     let parttime:number=8;
//     let wageperhour:number=20;
//     let empwage:number=0;
//     empwage=parttime*wageperhour;
//     console.log(empwage);  
// }
// function Switchcase(){
// let fulltime:number=8;
// let parttime:number=4;
// let wageperhour:number=20;
// let emphrs:number=0;
// let empwage:number=0;
// let key:number =Math.floor(Math.random()*10%3)
// switch(key){
//     case 0:
//     emphrs=fulltime;
//     break;
//   case 1:
//     emphrs=parttime;
//     break;
//   default:
//     emphrs=0;
// }
// empwage+=emphrs*wageperhour;
// console.log(empwage);
// }
// function Monthly_Wage(){
//     let fulltime:number=8;
// let parttime:number=4;
// let wageperhour:number=20;
// let emphrs:number=0;
// let empwage:number=0;
// let i:number=1;
// while(i<=20){
// let key:number =Math.floor(Math.random()*10%3)
// switch(key){
//     case 0:
//     emphrs=fulltime;
//     break;
//   case 1:
//     emphrs=parttime;
//     break;
//   default:
//     emphrs=0;
// }
// empwage+=emphrs*wageperhour;
// i++;
// }
// console.log(empwage);
// }
// function MaxWorkingHrs(){
//     let fulltime:number=8;
//     let parttime:number=4;
//     let wageperhour:number=20;
//    // import{fulltime, parttime, wageperhour} from './constan.mjs';
// function hrs(key){
//   switch(key){
//       case 0:
//       emphrs=fulltime;
//       break;
//     case 1:
//       emphrs=parttime;
//       break;
//     default:
//       emphrs=0;
//   }
//   return emphrs;
//   }
// var emphrs:number=0;
// var empwage:number=0;
// var totalhrs:number=0;
// var i:number=0;
// while(i<=20){
// let key:number =Math.floor(Math.random()*10%3)
//   emphrs=hrs(key);
//   totalhrs+=emphrs;
//   empwage+=emphrs*wageperhour;

// if(totalhrs>=160)
// break;
// i++;
// }
// i--;
// console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);
// }
// var key:number=2;

// switch(key){
//     case 1:
//         attendance_check();
//     break;
//     case 2:
//         Daily_Wage();
//     break;
//     case 3:
//         Part_time()
//     break;
//     case 4:
//         Switchcase();
//     break;
//     case 5:
//         Monthly_Wage();
//     break;
//     case 6:
//         MaxWorkingHrs();
//     break;
//     default:
        
//     break;

// }


// UC8
  
// const con= require('./constant')
// let wage:number[]=[];
// function hrs(key){
//   switch(key){
//       case 0:
//       emphrs=con.fulltime;
//       break;
//     case 1:
//       emphrs=con.parttime;
//       break;
//     default:
//       emphrs=0;
//   }
//   return emphrs;
//   }
// var emphrs:number=0;
// var empwage:number=0;
// var totalhrs:number=0;
// var i:number=0;
// while(i<=20){
// let key:number =Math.floor(Math.random()*10%3)
//   emphrs=hrs(key);
//   totalhrs+=emphrs;
//   empwage+=emphrs*con.wageperhour;
// wage.push(empwage);
// if(totalhrs>=160)
// break;
// i++;
// }
// i--;
// console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);
// console.log(wage);
