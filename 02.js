function ptanii(fn,delay){
    
    let myid;
    return function(...args){
        clearTimeout(myid)

        myid=setTimeout(()=>{
            fn.apply(this,args)
        },delay)
        
    }

}
function greet(name){
    console.log(`name is:${name}`)
}

 const sachmeptanii=ptanii(()=>greet("vivek"),3000)
sachmeptanii()
sachmeptanii()
sachmeptanii()
sachmeptanii()////bas ye wala line call higa upar wala nii higa bcz of debounce concept