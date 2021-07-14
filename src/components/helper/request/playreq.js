import app_data from "./app_data"
import {handleErrors} from "./get_request"



export default function Playreq(url,body,update){
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
        if(data.status===1){
            update([["alert",""]])
            setTimeout(()=>{
                update([["alert","some error occured please refresh!"],["alertType","error"],["loading",false]])
            },5)
        }
    })
    .catch((error)=>{
        update([["alert",""]])
        setTimeout(()=>{
            update([["alert","some error occured please refresh!"],["alertType","error"],["loading",false]])
        },5)
    })
    
}