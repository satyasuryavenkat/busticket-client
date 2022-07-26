import React, { useState } from "react";
import { useSelector } from "react-redux";
import './style.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Book = () => {

    const navigate = useNavigate();
    const busName = useSelector(state => state.users.busName);
    const userMail = useSelector(state => state.users.userMail);
    
    const [ticket, setTicket] = useState({usermail: '', busseats: '', busname: ''});
    const [seats, setSeats] = useState(0);
    const url = 'http://localhost:5051/bus';
    console.log(busName, userMail, seats);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`${url}/bookticket`, {
            usermail: userMail,
            busseats: seats, 
            busname: busName
        })
        .then(res => {
            if(res.status === 201)
            {
                console.log(res);
                navigate('/ticket');
                
            }
          });
    }
    return(

        <div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Choose Seats</h3>
		<div className="card-text">

			<form onSubmit={handleSubmit}>
			
            <div className="form-group">
					<label htmlFor="exampleInputEmail1">Bus Name</label>
					<input 
                    className="form-control form-control-sm" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    value={busName}
                    disabled
                    />
				</div>
                            <div class="form-group">
                <label htmlfor="exampleFormControlSelect2">Seats</label>
                <select className="form-control" name="seats" id="exampleFormControlSelect2"
                onChange={(e)=> setSeats(e.target.value)}
                >
                <option value="">Select No of Seats</option>
                <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
				<button type="submit" className="btn btn-primary btn-block">Book Seats</button>
				
			</form>
		</div>
	</div>
    </div>

    
</div>

    );
}

export default Book;