

function urldata(json){
    let arr=[]
    for (const name in json) {
       arr.push(name+'='+json(name))
    }
    return arr.join('&');
}

let baseURL='http://localhost:8888';
function Http({url,method='get',data={}}){
    let token = sessionStorage.getItem('token') || ''

    switch(method.toLocaleLowerCase()){
        case 'get':
            return fetch(baseURL+url+'?'+urldata(data),{headers:{token}}).then(res=>res.json());
        case 'post':
            return fetch(baseURL,{
                method,
                headers:{
                    'Content-Type': 'application/json',
                    token
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
    }
}

export default Http;