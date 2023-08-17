let url ="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";
// fetch(url)

// .then((res)=>{
//  return res.json();
// })
// .then((data)=>{
//     console.log("Data1:",data.fact);
//     return fetch(url)
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data2:",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error caught-->",err);
// })
let button=document.querySelector("button")
button.addEventListener("click",async()=>{
let link = await getimage();
// console.log(link);
let imge=document.querySelector("#result")
imge.setAttribute("src",link)
})


async function getimage(){
    try{
        let res= await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("ERROR ",e);
        return"/"
    }
    

}

// async function fact(){
//     try{
//         let res= await fetch(url);
//         let data= await res.json();
//         console.log(data.fact)

//         let res2= await fetch(url);
//         let data2= await res2.json();
//         console.log(data2.fact)
//     }
//     catch(e){
//         console.log("ERROR ",e);
//     }
    

// }