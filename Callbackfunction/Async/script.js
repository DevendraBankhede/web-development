async function greet(){
    return "hello Students";
}

greet().then(console.log);

// Question -2 
async function getData(){

    let result = await new Promise(function(resolve){
        setTimeout(function(){
            resolve("data receved");
        },2000);
    });
    console.log(result);
}
getData();

// Question ->3 
async function step1(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Step1 Comlited");
        },2000);
    });
}
async function step2(){
    return new Promise(function(){
        setTimeout(function(){
            resolve("Step2 Complited");
        },2000);
    });
}
async function runStep(){
    let result1 = await step1();
    console.log(result1);

     let result2 = await step1();
    console.log(result2);
    
}
runStep();

// Question -4 
async function completeTask() {

    let promise = new Promise(function(resolve){

        setTimeout(function(){

            resolve();

        },2000);

    });

    await promise;

    console.log("Task Completed");

}

completeTask();

// Question ->5  
function getData(){
    return new Promise(function(resolve,reject){

        let success = false;

        if(success){
            resolve("data mil gya");
        }
        else{
            reject("data nhi mila");
        }
    });
}
async function fetechData(){
    try{
        let  result = await getData();
        console.log(result);
        
    }
    catch(error){
        console.log("Error",error);
        
    }
}
fetechData();

// Question ->6 
function checkValue(value){
    return new promise(function(resolve,reject){

        if(value > 10){
            resolve("Value is grater than 10")
        }
        else
        {
            reject("Value is 10 or less");
        }
    });
}

async function check(){
    try{
        let result = await checkValue(15);
        console.log(result);
    }catch(error){
        console.log(error);
        
    }
}
check();

// Question ->7 
function step1(){
    return new Promise(function(resolve){

        setTimeout(function(){
            resolve("Step 1 Complited");
        },1000);
    });
}

function step2(){
    return new Promise(function(resolve){

        setTimeout(function(){
            resolve("Step 2 Complited");
        },1000);
    });
}
function step3(){
    return new Promise(function(resolve){

        setTimeout(function(){
            resolve("Step 3 Complited");
        },1000);
    });
}

async function runSteps(){

    let result1 = await step1();
    console.log(result1);

    let result2 = await step2();
    console.log(result2);

    let result3 = await step3();
    console.log(result3);  
}
runSteps();

        