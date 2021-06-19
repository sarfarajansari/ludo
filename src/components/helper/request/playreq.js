import app_data from "./app_data"
import {handleErrors} from "./get_request"



export default function Playreq(url,body,update="",set="",setplay=""){
    body.token =  localStorage.getItem('LudoToken')
    var headers = { 'Content-Type': 'application/json' }
    const requestdata = {
        method: 'POST',
        headers: headers,
        body:JSON.stringify(body)
    }
    fetch(app_data.url+ url,requestdata)
    .then(handleErrors)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data)
        if (set){
            set(data)
        }
        console.log(data.rolled)
        setplay([["rolled",data.rolled]])
    })
    .catch((error)=>{
        update([["alert",""]])
        setTimeout(()=>{
            update([["alert","some error occured please refresh!"],["alertType","error"],["loading",false]])
        },5)
    })
    
}