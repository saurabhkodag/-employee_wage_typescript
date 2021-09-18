
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