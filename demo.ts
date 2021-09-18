
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


//UC9

// const con= require('./constant')
// let wage:number[]=[];
// let mp = new Map();
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
// var i:number=1;
// while(i<=20){
// let key:number =Math.floor(Math.random()*10%3)
//   emphrs=hrs(key);
//   totalhrs+=emphrs;
//   let dailyw:number=emphrs*con.wageperhour;
//   empwage+=dailyw;
//   mp.set(i,dailyw);
// wage.push(dailyw);
// if(totalhrs>=160)
// break;
// i++;
// }
// i--;
// function total_wage(){
//   console.log("total Wage using Array forEach or reduce method");
// console.log(wage);
// let sum:number = 0;
// wage.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }

// console.log(sum);
// }
// function  daywage(){
//   console.log(" Day along with Daily Wage using Array map");
//   /*mp.forEach((value, key) => {
//     console.log(key+" "+value);
// })*/
// var newArr :any[]= wage.map(function(val, index){
//   return {Day:index, Wage:val};
// })
// console.log(newArr);
// }
// function full(){
//   console.log(" Days when Full time wage of 160 were earned");
//   mp.forEach((value, key) => {
//     if(value==160)
//     console.log(key);
// })
// console.log(wage);
// function w(val,index) {
//   if(val == 160)
//   return index;
// }
// console.log(" Days when Full time wage of 160 were earned");
// var newArr : any[]= wage.map(function(val, index){
//   return {Day:index, Wage:val};
// })
//   var filtered = newArr.filter(item => item.Wage==160);
//   console.log(filtered);

// }
// function firstfull(){
//   var newArr:any[] = wage.map(function(val, index){
//     return {Day:index, Wage:val};
//   })
//   let ff=newArr.find(function(val,index){
//     if(val.Wage==160)
//     return index;
//   })
//   console.log(ff);
// }
// function fullexist(){
//   let p=wage.indexOf(160);
// if(p!=-1)
// console.log("full time exist");
// else
// console.log("full time does not exist");
// }

// function part(){
//   let p=wage.indexOf(80);
// if(p!=-1)
// console.log("part time exist");
// else
// console.log("part time does not exist");
// }
// function day(){
//   console.log("days=", i-present);
// }
// //console.log("DAY",i,"EmpHr:",totalhrs, "EmpWage:",empwage);
// let key=7;
// let present=0;
// switch(key){
//   case 1:
//     present++
//     total_wage();
//   break;
//   case 2:
//     present++;
//     daywage();
//   break;
//   case 3:
//     full();
//   break;
//   case 4:
//     firstfull();
//   break;
//   case 5:
//     fullexist();
//   break;
//   case 6:
//     part();
//   break;
//   case 7:
//     day();
//   break;
// }

