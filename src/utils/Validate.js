const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const validation=(email,password)=>{
    const validateemail=emailRegex.test(email);
    const validatepassword=passregex.test(password);
    if(!validateemail){
        return "Email not valid"
    }
    if(!validatepassword){
        return "Password not valid"
    }

    return null;
}