

function validateForm() {
   let name = document.getElementById("firstname").value;
   let gender = document.querySelector('input[name="gender"]:checked').value;
   let MM = document.getElementById("MM").value;   
   let DD = document.getElementById("DD").value;
   let CC = document.getElementById("CC").value;
   let YY = document.getElementById("YY").value;
   d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

   let day = Math.round(d)
   switch(day){
      case 0 || " ":
         days="None";
         break;
      case 1:
         days="Sunday";
         break;
      case 2:
         days="Monday";
         break;
      case 3:
         days="Wednesday";
         break; 
      case 4:
         days="Thursday";
         break;
      case 5:
         days="Friday";
         break;
      case 6:
         days="Saturday";
         break;
      case 7:
         days = "Sunday";
         break;
   }


   if (gender.value === "Male" || "male"){
   switch(days){
      case "Sunday":
         Akan =("Kwasi");
      case "Monday":
         Akan=("Kwadwo");
      case "Tuesday":
         Akan=("Kwabena")
      case "Wednesday":
         Akan=("Kwaku")
      case "Thursday":
         Akan=("Yaw")
      case "Friday":
         Akan=("Kofi")
      case "Saturday":
         Akan=("Kwame")
   }
   }

   if (gender === "Female" || "female"){
   switch(day){
      case "None":
         Akan = ("Wrong input !");
         break;
      case "Sunday":
         console.log("Akosua");
         break;
      case "Monday":
         console.log("Adwoa")
         break;
      case "Tuesday":
         console.log("Abenaa")
         break; 
      case "Wednesday":
         console.log("Akua")
         break;
      case "Thursday":
         console.log("Yaa")
         break;
      case "Friday":
         console.log("Afua")
         break;    
      case "Saturday":
         console.log("Ama")
         break;     
   }
   }
   if (name.value == " "){
      alert("Theres a problem with input!!")
   }
   else{
      greeting.innerHTML=" Hello " + name;
      result.innerHTML = "You were born on a : " + days;
      final.innerHTML = "Your Akan Name is :" + Akan;
   }
   

}
   

