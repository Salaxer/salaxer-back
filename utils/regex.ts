
 export function checkEmail(email:string){
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email)) {
        return true;
    }
    return false
}

 export function checkMessage(message:string){
    if (message.length > 30) {
        return true;
    }
    return false
}