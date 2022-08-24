function functionName(){

   var e = document.getElementById("languageList");

   var value = e.value;

   var text = e.options[e.selectedIndex].text;

   if(text=="Tamil")
   {
   	document.getElementById("dogslink").innerHTML ="நாய்";
   	document.getElementById("foodslink").innerHTML ="உணவு";
   	document.getElementById("medicinelink").innerHTML ="மருந்துகள்";
   	document.getElementById("clotheslink").innerHTML ="ஆடைகள்";
   	document.getElementById("logoutlink").innerHTML ="வெளியேறு";
   	document.getElementById("loginlink").innerHTML ="உள்நுழைய";
   	document.getElementById("signuplink").innerHTML ="பதிவு";

   }

  else if(text=="English")
   {
   	document.getElementById("dogslink").innerHTML ="Dogs";
   	document.getElementById("foodslink").innerHTML ="Foods";
   	document.getElementById("medicinelink").innerHTML ="Medicines";
   	document.getElementById("clotheslink").innerHTML ="Clothes";
   	document.getElementById("logoutlink").innerHTML ="Logout";
   	document.getElementById("loginlink").innerHTML ="Login";
   	document.getElementById("signuplink").innerHTML ="SignUp";
   }

   

}