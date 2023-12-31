let passValue=document.getElementById("password")
function newPassword(){
    let a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let n="1234567890"
    let c="!@#$%^&*()_-"
    let i=0
    let pass=""
    while(i<12){
        pass=pass+a[Math.floor(Math.random()*a.length)]
        pass=pass+n[Math.floor(Math.random()*n.length)]
        pass=pass+c[Math.floor(Math.random()*c.length)]
        i=i+3
    }
    passValue.value=pass
}
function copyPassword(){
    passValue.select();
    document.execCommand("copy")
}