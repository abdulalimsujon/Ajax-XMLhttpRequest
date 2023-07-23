

const getButton = document.getElementById('get-btn')
const sendButton = document.getElementById('send-btn')


const sendRequest = function(method,url,data){


    const promise = new Promise((resolve,reject)=>{

         // create  a request object
    const xhr = new XMLHttpRequest();
    

    //prepare the request
    xhr.open(method,url)
    xhr.responseType='json'
    xhr.setRequestHeader("Content-Type","application/json")

    xhr.send(data)

    xhr.onload = function(){

        if(xhr.status >= 400){
            reject(xhr.response)
        }else{
            resolve(xhr.response)

        }
      
    }

    xhr.onerror=function(){
        reject('something was wrong')
    }

    })

    return promise;

    
   
    

}


const getData = function(){

    sendRequest('GET','https://jsonplaceholder.typicode.com/todos/1')
    .then(responseData =>{
        console.log(responseData)
    })

}
const sendData = function(){

    sendRequest('POST','https://jsonplaceholder.typicode.com/posts',

    
        JSON.stringify(
            {
                title: 'foo',
                body: 'bar',
                userId: 1,
              }
          )
    
    )
    .then(responseData =>{
        console.log(responseData)
    }).catch((error)=>{

        console.log(error)

    })

}

getButton.addEventListener('click',getData);
getButton.addEventListener('click',sendData);