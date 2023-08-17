// let url="https://icanhazdadjoke.com/";
// async function getjoke(){
//     try{
//         const config = {headers:{Accept: "application/json"}};
//         let res=await axios.get(url , config);
//         console.log(res.data);
//         }
//         catch(err){
//          console.log("Error-->",err)
//         }
//     }

// let url ="http://universities.hipolabs.com/search?name=";


// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let country=document.querySelector("input").value
//     console.log(country);
//   let collArr= await  getcolleges(country);
//   Show (collArr);
// })

// function Show(collArr){
//     let list=document.querySelector("#list");
//     list.innerText="";
//     for(col of collArr){
//         console.log(col.name)

//        let li =  document.createElement("li");
//        li.innerText=col.name;
//        list.appendChild(li);
//     }
// }

// async function getcolleges(country){
//     try{
//         let res=await axios.get(url+country);
//         return res.data;
//     }  
// catch(e){
// console.log("Error--->",e);
// return [];
// }
// }






















let url ="http://universities.hipolabs.com/search?name=India";


let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let state=document.querySelector("input").value
    console.log(state);
  let collArr= await  getcolleges(state);
  Show (collArr);
})

function Show(collArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of collArr){
        console.log(col.name)

       let li =  document.createElement("li");
       li.innerText=col.name;
       list.appendChild(li);
    }
}


async function getcolleges(state){
    try{
        let res=await axios.get(url);
        return res.data;
    }  
catch(e){
console.log("Error--->",e);
return [];
}
}
