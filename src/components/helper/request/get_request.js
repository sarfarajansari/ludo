import app_data from "./app_data";


export function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
export default  function Getreq(url,set,update) {
    update([["loading",true]])
    fetch(app_data.url+ url)
    .then(handleErrors)
    .then(response=>response.json())
    .then((data) =>{
        if(data.status==0){
            set(data)
        }
        else{
            update([["alert",""]])
            setTimeout(()=>{
                update([["alert","some error occured please refresh !"],["alertType","error"],["loading",false]])
            },5) 
            if(data.message=="User not found"){
                localStorage.removeItem("taskToken")
            }
        }
    })
    .catch((error)=>{
        update([["alert",""]])
        setTimeout(()=>{
            update([["alert","some error occured please refresh! Please check your internet connection"],["alertType","error"],["loading",false]])
        },5) 
    })
}