// data store karna 
localStorage.setItem("username","Amit");

// Data nikalna 
let name = localStorage.getItem("username");

// console me print karna
console.log("name");

// ===Question->2=== 
// store karna
sessionStorage.setItem("theme","dark");

// nikalna 
let themeValue = sessionStorage.getItem("theme");

// page par show karna 
document.getElementById("result").innerText = themeValue;

//  ==== Question ->3 ==== 
// cookes creat karna
document.cookie = "user=Rahul";

// cookes print Karna 

console.log(document.cookie);

//  ==== Question ->4 ==== 
// data store karna  
localStorage.setItem("city","Mumbai");

// data remove karna 
localStorage.removeItem("city");

// check karna 
let result = localStorage.getItem("city");
console.log(result);

// ==== Question ->5 ====
localStorage.setItem("username","Raj");
localStorage.setItem("theme","light");

// Step 2: retrieve karna
let username = localStorage.getItem("username");
let theme = localStorage.getItem("theme");

console.log(username);
console.log(theme);

// ==== Question ->6 ==== 
document.getElementById("clearBtn").addEventListener("click",function(){
    localStorage.clear();
    console.log("All localStroge data cleared");
});

// ==== Question ->7 ==== 
document.getElementById("saveBtn").addEventListener("click",function(){
    let value = document.getElementById("myInput").value;

    localStorage.setItem("userInput",value);

    console.log("Saved:",value);
});

// ==== Question ->8 ==== 
// data nikalna
let userName = localStorage.getItem("userName");

if (userName) {
  document.getElementById("heading").innerText = userName;
} 
else {
  document.getElementById("heading").innerText = "No user found";
}

// ==== Question ->9 ==== 
localStorage.setItem("theme","light");

localStorage.setItem("theme","dark");

let updateTheme = localStorage.getItem  ("theme");  

console.log(updatedTheme);

// ==== Question ->10 ====
sessionStorage.setItem("Username","Ram");

console.log(sessionStorage.getItem("Username"));