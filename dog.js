

function myFunction()
{
    var finalD=document.getElementById("getAge");
    var age=document.getElementById("dAge").value;
    var days = document.getElementById("days");
    var month = document.getElementById("month");
     var week =  document.getElementById('week');
     debugger;
   if(age > 21)
   {

   
    var ageD=age-21;
    finalD =parseFloat(( 2 + (parseFloat(ageD) * 0.25)));  //For Age graeter than 21 year
    document.getElementById('getAge').value=finalD;
    days = parseFloat(finalD * 365);
    month= parseFloat(finalD * 12);
    week = finalD * 52;
   // document.getElementById('days').value=days;
    document.getElementById('month').value=month;
   // document.getElementById('week').value=week;
}
else if(age == 21)
{                                                            //For age equal to 21 year
     finalD = 2;
    document.getElementById('getAge').value=finalD;
    days = finalD * 365;
    month= finalD * 12;
    week = finalD * 52;
   // document.getElementById('days').value=days;
    document.getElementById('month').value=month;
    //document.getElementById('week').value=week;
}
else 
{                                                           //For age less than 21 year of age
    var ageD = 21 - age;
   finalD =parseFloat( 2 - (parseFloat(ageD) / 10.5));
    document.getElementById('getAge').value=finalD;
    days = finalD * 365;
    month= finalD * 12;
    week = finalD * 52;
   // document.getElementById('days').value=days;
    document.getElementById('month').value=month;
    //document.getElementById('week').value=week;
}
}

