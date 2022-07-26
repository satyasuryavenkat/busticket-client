import React, { useEffect } from 'react';
import './style.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { setBusName } from '../../actions/user';
import { buseData } from '../data/bus';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const disptach = useDispatch();
    const navigate = useNavigate();
    const [filter, setFilter] = useState({source: '', destination: '' });
    const [error, setError] = useState(false);
    const [buses, setBuses] = useState([]);
    const handleSubmit = (e) => {

        e.preventDefault();
        if(filter.destination === 'Bangalore'){
            setBuses(buseData.hydToBanglore);
        }
        else{
            setBuses(buseData.hydToChennai);
        }
        console.log(buses);
        
        
    };
    const bookBus = (busNam) =>{

        disptach(setBusName(busNam));
        navigate('/book');
        
        return true;
    }



    useEffect(() => {
        if((filter.source === filter.destination) && (filter.source!=='' && filter.destination!=='')){
                setError(true);
        }
        else{
            setError(false);
        }
    }, [filter]);

    return(
<div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Welcome to Bus Ticket Booking</h3>
		<div className="card-text">

			{
                error ?<div className="alert alert-danger alert-dismissible fade show" role="alert">Source & Destination is not valid</div> : '' 
            }
			<form onSubmit={handleSubmit}>
			
                            <div class="form-group">
                    <label htmlfor="exampleFormControlSelect1">Source</label>
                    <select className="form-control" name="source" id="exampleFormControlSelect1"
                    onChange={(e)=> setFilter({...filter, source:e.target.value})}
                    >
                    <option value="">Select Source</option>
                <option value="Hyderabad">Hyderabad</option>
                    </select>
                </div>
                            <div class="form-group">
                <label htmlfor="exampleFormControlSelect2">Destination</label>
                <select className="form-control" name="destination" id="exampleFormControlSelect2"
                onChange={(e)=> setFilter({...filter, destination:e.target.value})}
                >
                <option value="">Select Destination</option>
                <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                </select>
            </div>
				<button type="submit" className="btn btn-primary btn-block">Search</button>
				
			</form>
		</div>
	</div>
    </div>

{
    buses.length === 0 ? '' :
    buses.map((bus) => (
   
        <div key={bus} className="card" style={{margin: 10, cursor: 'pointer'}} onClick={() => {
            bookBus(bus);
            }}>
  <div className="card-body">
    {bus}
  </div>
</div>
    ))
}
    
</div>

    );
}

export default Home;