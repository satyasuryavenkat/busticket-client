export const setUserLoggedIn = (loginStatus) => (dispatch) => {

    try {
        const status = loginStatus;

        dispatch({ type: 'SET_LOGIN_STATUS' , payload: status});
        
    } catch (error) {

        console.log(error);
        
    }
}


export const setUserMail = (userMail) => (dispatch) => {

    try {
        const mail = userMail;

        dispatch({ type: 'SET_USER_MAIL' , payload: mail});
        
    } catch (error) {

        console.log(error);
        
    }
}

export const setBusName = (busName) => (dispatch) => {

    try {
        const name = busName;

        dispatch({ type: 'SET_BUS_NAME' , payload: name});
        
    } catch (error) {

        console.log(error);
        
    }
}
