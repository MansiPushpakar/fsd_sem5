 const div= document.getElementById('container')
 const button= document.getElementById('btn')
 console.log(div);
 async function display(){
    //  div.innerHTML="<h1>hello world</h1>";
    const serverdata =  await fetch('https://fakestoreapi.com/products');
    const jsondata= await serverdata.json();
    console.log(jsondata);
 }

 button.addEventListener('click',display);