import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
    const index=localStorage.getItem('StudId')
    console.log('====================================')
    console.log(index)
    console.log('====================================')
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);

    useEffect(() => {
        getUser();
    },[]);

    const getUser = () => {
        axios.get(`https://phygitalitclinic.com/react/StudentDb/studData.php/`).then(function (response) {
            console.log(response.data[index]);
             setInputs(response.data[index]);
        });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const gender = event.target.gender;
        const classs = event.target.classs;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value, [gender]: value, [classs]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://phygitalitclinic.com/react/StudentDb/studData.php/`, inputs).then(function (response) {
            console.log(response.data);
             navigate('/studentlist');
        });
    }
   
    return (
        <div>
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input value={inputs.name || ''} type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Gender: </label>
                            </th>
                            <td>
                                <input value={inputs.gender || ''} type="text" name="gender" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Class: </label>
                            </th>
                            <td>
                                <input value={inputs.class || ''} type="text" name="class" onChange={handleChange} />
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