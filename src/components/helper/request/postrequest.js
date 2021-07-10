import app_data from "./app_data"
export default function post_request(url,body){
    const requestdata = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(body)
    }
    fetch(app_data.url+ url,requestdata)
}