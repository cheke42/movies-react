const 
API = process.env.REACT_APP_API,
TOKEN = process.env.REACT_APP_API_TOKEN

export function get(path){
    console.log("API",`${API}${path}`)
    return fetch(`${API}${path}`,{
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
       })
       .then(result => result.json())
}