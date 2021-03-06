import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import "../../../css/admins/navbar.css";

class Navbar extends Component {
    logout(e){
        e.preventDefault();
        localStorage.removeItem("adminsToken");
        this.props.history.push(`/adminsLogin`);
    }
    render() { 
            const  Navbar= <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    
                    <li class="nav-item active">
                        <Link class="nav-link" to="/home"><FontAwesomeIcon icon='home' className='icon' />Home <span class="sr-only">(current)</span></Link>
                    </li>

                    <li class="nav-item active">
                    <Link class="nav-link" to="/getitem"><FontAwesomeIcon icon='briefcase' className='icon' /> Items </Link>
                    </li>

                    <li class="nav-item active">
                    <Link class="nav-link" to="/get/users"><FontAwesomeIcon icon='briefcase' className='icon' /> Members </Link>
                    </li>
                    <li>
                    <Link class="nav-link" to="/get/category"><FontAwesomeIcon icon='briefcase' className='icon' /> Categories </Link>
                    </li>

                    <li class="nav-item layout">
                        <a class="nav-link" href="/adminsLogin" onClick={this.logout.bind(this)}><FontAwesomeIcon icon='angle-double-left' className='icon' /> logout</a>
                    </li>
                </ul>
            </div>
        </nav>
        return (
            <div> {localStorage.adminsToken ? Navbar : <Redirect to='/adminsLogin'> </Redirect>} </div>
        );
    }
}

export default withRouter(Navbar);