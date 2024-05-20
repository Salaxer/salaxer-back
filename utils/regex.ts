
 export function checkEmail(email:string){
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return emailRegex.test(email);
}

 export function checkMessage(message:string){
    return message.length > 30;
}