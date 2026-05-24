const myPromise = new Promise((resolve,reject) => {
    let success = true;

    if(success){
        resolve("Data mil gya");
    }
    else{
        reject("Error aa gya");
    }
});

myPromise
.then((result) => {
    console.log(result);   
})

.catch((error) => {
    console.log(error);
});