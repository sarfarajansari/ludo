import app_data from "./appdata"

export default function fetchPost(url,body,update="",set=""){
    var headers = { 'Content-Type': 'application/json' }
    const requestdata = {
        method: 'POST',
        headers: headers,
        body:JSON.stringify(body)
    }
    fetch(app_data.url+ url,requestdata)
    .then(response=>response.json())
    .then((data)=>{
        console.log("data updated in the server",url)
        if (set){
            set(data)
        }
    })
    
}