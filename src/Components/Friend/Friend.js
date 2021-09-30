import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, phone, email, website, address } = props.friend;

    return (
        <div className='friendStyle'>
            <h2>I am: {name} {id}</h2>
            <h3>Call me: {phone}</h3>
            <h4>For more details: {website}</h4>
            <h5>You can also reach me: {email}</h5>
            <p>I live in {address.city}</p>
            <Link to={`/friend/${id}`}>Visit Here</Link>
        </div >
    );
};

export default Friend;