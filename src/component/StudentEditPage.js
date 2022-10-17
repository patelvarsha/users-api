import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
   
    const id = localStorage.getItem('StudId')
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);

    // const { id } = useParams();

    useEffect(() => {
         getUser();
    },[]);

    const getUser = () => {
        axios.get(`http://localhost:3000/users/${id}`).then(function (response)
         {
             console.log(response.data);
            setInputs(response.data);
        }).catch(err=>console.log(err));
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const email = event.target.email;
      
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value, [email]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, inputs).then(function (response) {
             console.log(response.data);
             navigate('/studentlist');
        }).catch(err=>console.log(err));
    }
    
    return (
        <div>
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name:</label>
                            </th>
                            <td>
                                <input value={inputs.name || ''} type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Gender:</label>
                            </th>
                            <td>
                                <input value={inputs.email || ''} type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}