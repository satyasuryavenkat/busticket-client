
export default (user = {
    isUserLoggedIn: false,
    busName: '',
    userMail: ''
}, action) => {

    switch (action.type) {
        case "SET_LOGIN_STATUS":
            
            return {
                ...user,    
                isUserLoggedIn: action.payload
            }
        
        case "SET_BUS_NAME":
        
            return {
                ...user,    
                busName: action.payload
            }
        
        case "SET_USER_MAIL":
        
            return {
                ...user,    
                userMail: action.payload
            }
            
        default:
            return user;
    }

}