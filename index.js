const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers=drivers=>drivers.slice(0,2);
const returnLastTwoDrivers=drivers=>drivers.slice(-2);
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (multiplvalue)=>{
return function (value)
{
    return multiplvalue*value
}}
 function fareDoubler(){
     return 20
 }
 
 function fareTripler(){
     return 36
 }
 const selectDifferentDrivers=(drivers,driversreturn)=>{
 return driversreturn(drivers)};

