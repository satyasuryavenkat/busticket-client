import React from 'react';
import './style.css';
import { useState } from 'react';
// import { authenticateUser } from '../../api';/
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { setUserLoggedIn } from '../../actions/user';



const Login = () => {

    const disptach = useDispatch();

    const [user, setUser] = useState({email: '', password: '' });
    const url = 'http://localhost:5051/bus';
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post(`${url}/users/authenticate`, user)
        .then(res => {
            if(res.status === 200)
            {
                disptach(setUserLoggedIn(true));

            }
          })
        
    };

    return(
<div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Log in to Bus Ticket Booking</h3>
		<div className="card-text">

			{/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
			<form onSubmit={handleSubmit}>
			
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input 
                    type="email" 
                    name="email"
                    className="form-control form-control-sm" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    onChange={(e)=> setUser({...user, email:e.target.value})}
                    />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					
					<input 
                    name="password"
                    type="password" 
                    className="form-control form-control-sm" 
                    id="exampleInputPassword1"
                    onChange={(e)=> setUser({...user, password:e.target.value})}
                    />
				</div>
				<button type="submit" className="btn btn-primary btn-block">Sign in</button>
				
			</form>
		</div>
	</div>
</div>
</div>

    );
}

export default Login;