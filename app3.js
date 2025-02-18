//call stack and breakpoint

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

//our first request API

// let url = "https://catfact.ninja/fact";

// fetch(url);

// axios

// get facts about cat and dogs using API..

// let btn = document.querySelector("button");

// btn.addEventListener('click', async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
//     });

// let url1 = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         const response = await axios.get(url1);
//         return response.data.fact;
//     }
//     catch{
//         console.error("Error");
//         return "No fact found";
//     }
// }

//for dog image using API

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener('click', async () => {
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     });

// async function getImage(){
//     try{
//         const response = await axios.get(url2);
//         return response.data.message;
//     }
//     catch{
//         console.error("Error");
//         return "No image found";
//     }
// }

//for unversity country name vise using API..

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () =>{
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let college = await getColleges(country);
//     show(college);

// });

// function show(college){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(colleges of college){
//         console.log(colleges.name);

//         let li = document.createElement("li");
//         li.innerText = colleges.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try{
//         let res = await axios.get(url + country);
//         return res.data;
//     }
//     catch(err){
//         console.log("error: ",e);
//     }
// }

//factorial of n
// function factorial(n){
//     if(n===0){
//         return 1;
//     }else{
//         return n * factorial(n - 1);
//     };
// }

// console.log(factorial(5));


//Closure in javascript

// function outer(){
//     let str = "hello world!";

//     function inner(){
//         console.log(str);
//     }
//     return inner;
// }
// let output = outer();
// output();



