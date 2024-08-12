const url = 'http://dummyjson.com/products';

async function chamarApi() {
    const resp = await fetch(url);
    if(resp.status == 200){
        const obj =await resp.json();
        console.log(obj);
    }
}

chamarApi()