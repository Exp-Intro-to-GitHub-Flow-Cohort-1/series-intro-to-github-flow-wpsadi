(async function(){
    for(let x = 0; x<6100;x++){
        try{
            fetch("http://localhost:10000/api/v1/admin/ping")
        }
        catch(e){
            null
        }
        // fetch("http://localhost:10000/api/v1/admin/ping")
    }
})()