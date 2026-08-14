// # Auto detect text files and perform LF normalization
// # console.log("fIRST")
// # setTimeout(()=>{(console.log("second"))},1000)
// # for(i=0;i<10000;i++){
// # console.log("second")
// # }
// # console.log("third")
// setTimeout(()=>{console.log("first")
//     setTimeout(()=>{console.log("first")
//         setTimeout(()=>{console.log("first")
//              setTimeout(()=>{console.log("first")
//                  setTimeout(()=>{console.log("first")
//                      setTimeout(()=>{console.log("first")
//                          setTimeout(()=>{console.log("first")
//                            setTimeout(()=>{console.log("first")
                           
//                            },1000)
//                          },1000)
//                      },1000)
//                  },1000)
//              },1000)
//         },1000)
//     },1000)
//  },1000)
               
//promise
const promise = new Promise((resolve, reject) => {
    username="mansi";
    password="1256";
    if(username=="mansi" && password=="1256"){
        resolve("login successful");
     } else{
        reject("login failed");
     }})
    // promise.then((message)=>{
    //     console.log(message);
    // }).catch((message)=>{
    //     console.log(message);
    // }).finally(()=>{
    //     console.log("login process completed");
    // })
    async function handlelogin(){
        try{
            await mypromise
        }
        catch(e){
            console.log(e)
        }
        finally {
            console.log("ALTHE RESOURCRE HAVE BEEN CLOSEFD")
        }
}
handlelogin()