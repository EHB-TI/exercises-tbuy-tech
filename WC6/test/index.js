async function a() {
    let config, resp = null; 


    await resp = fetch('data.json');
    await resp.json();    
    
    
    config = getConfig().then(console.log(config));
}


