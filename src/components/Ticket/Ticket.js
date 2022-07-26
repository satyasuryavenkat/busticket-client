import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const Ticket = () => {

    const [tickets, setTickets] = useState([]);
    const userMail = useSelector(state => state.users.userMail);
    const getMyTickets = () => {
        console.log('hhh');
    axios.get('http://localhost:5051/bus/tickets')
    .then((res) => {
        if(res.status === 200){
            setTickets(res.data);
        }
    });
    
    setTickets(tickets.filter(t => t.useremail === userMail));


}

    return(

<>

<button type="submit" style={{width: 200,marginLeft: 200}} onClick={getMyTickets} className="btn btn-primary btn-block">Show My Tickets</button>
{tickets.length!== 0 ? 
tickets.map((ticket) => (
<div class="card" style={{width: 350, margin: 30}}>
  <div class="card-body">
    <h5 class="card-title">Bus Name : {ticket.busname}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Mail Id : {ticket.usermail}</h6>
    <p class="card-text">No Of Seats : {ticket.busseats}</p>
  </div>
</div> )): '' 
}
</>
    );
}
export default Ticket;