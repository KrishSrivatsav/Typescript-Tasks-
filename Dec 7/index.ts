// let Url = "http://localhost:3000?id=5";
// let [data,dom] = Url.split("?");
// console.log(data);
// console.log(dom);


//callback

// function spam(a, b, cb) {
//     let res = a + b;
        
// }

// spam(5, 6, function (data) {
//     console.log(data);
// });


//promise chaining 

let mypromise = new Promise((resolve,reject)
{
    setTimeout(= () => resolve("true")){

},2000)

mypromise.then(function(data)){
    console.log(data)
}
}




