function validateForm() {
   let name = document.getElementById("firstname").value;
   let gender = document.getElementById("gender").value;
   let MM = document.getElementById("MM").value;   
   let DD = document.getElementById("DD").value;
   let CC = document.getElementById("CC").value;
   let YY = document.getElementById("YY").value;

   let  d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) +((26*(MM+1)/10)) + DD ) % 7
   let day = Math.round(d)
   switch(day){
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
         break;
      case "Monday":
         Akan=("Kwadwo")
         break;
      case "Tuesday":
         Akan=("Kwabena")
         break; 
      case "Wednesday":
         Akan=("Kwaku")
         break;
      case "Thursday":
         Akan=("Yaw")
         break;
      case "Friday":
         Akan=("Kofi")
         break;    
      case "Saturday":
         Akan=("Kwame")
         break;     
   }
   }

   if (gender === "Female" || "female"){
   switch(day){
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
   
   greeting.innerHTML=" Hello " + name;
   result.innerHTML = "You were born on a : " + days;
   final.innerHTML = "Your Akan Name is :" + Akan;

} 

