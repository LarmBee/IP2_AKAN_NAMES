
   let gender =document.querySelector("#gender");
   function validateForm() {
   let name = document.querySelector("#firstname");
   let day =document.querySelector("#DD");
   let CC = document.querySelector("#CC");
   let DD = document.querySelector("#DD");
   let MM =document.querySelector("#MM");
   let gender =document.querySelector("#gender")
   let result =document.querySelector("#result");

   let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
   alert(d)
   result.innerHTML="Your Akan is Afua"
   }
   
   
   if (gender === "Male" || "male"){
   switch(day){
      case "Sunday":
         console.log("Kwasi");
         break;
      case "Monday":
         console.log("Kwadwo")
         break;
      case "Tuesday":
         console.log("Kwabena")
         break; 
      case "Wednesday":
         console.log("Kwaku")
         break;
      case "Thursday":
         console.log("Yaw")
         break;
      case "Friday":
         console.log("Kofi")
         break;    
      case "Saturday":
         console.log("Kwame")
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