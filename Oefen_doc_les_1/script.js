//GLOBAL VARS
var SugarDaddy= "Henk"
var Salary = 1000;
var SendDM = false;
var TYObj = document.getElementById("thank-you-msg");

//FUNCTIONS
if (Salary >= 20000) {
    SendDM = true;

} else{
    SendDM = false
}

function SendDMFun(){
    if (Salary >= 20000) {
        SendDM = true;
        TYObj.innerHTML = "Why not more, " + SugarDaddy + "?";
    } else{
        SendDM = false
        TYObj.innerHTML = "Why not less, " + SugarDaddy + "?";
    }
    console.log(SendDM)
}


//OUTPUT
console.log("Name: " + SugarDaddy,"Salary: " + Salary)
console.log("SendDM: " + SendDM)