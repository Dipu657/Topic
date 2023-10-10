//function add slary topic
//function topic only slary
function sendmoneytoemploye(salary,bonus=0){
    const Total=salary+bonus;
    console.log(Total);
    return Total;
}
const returnTotal =sendmoneytoemploye(15000);
// salary add tranportation
const salarywithtranportation =returnTotal+2000;
console.log(salarywithtranportation);


//function topic salary and bonus
function sendmoney(slary,bonus){
const initialBonus= bonus || 0;
    const total =slary+initialBonus;
    console.log(total);
    return total;
}
const returntotal=sendmoney(15000,7500);