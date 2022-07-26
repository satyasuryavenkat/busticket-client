export const setUserLoggedIn = (loginStatus) => (dispatch) => {

    try {
        const status = loginStatus;

        dispatch({ type: 'SET_LOGIN_STATUS' , payload: status});
        
    } catch (error) {

        console.log(error);
        
    }
}