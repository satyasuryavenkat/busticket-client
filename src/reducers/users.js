
export default (user = {
    isUserLoggedIn: false
}, action) => {

    switch (action.type) {
        case "SET_LOGIN_STATUS":
            
            return {
                ...user,    
                isUserLoggedIn: action.payload
            }
            
        default:
            return user;
    }

}