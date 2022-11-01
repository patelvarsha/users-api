import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { api } from '../Api';

export default function StudentList() {
  const userIndex = localStorage.getItem('StudId')
  const [studData, setStudData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getStud();
  }, [])

  const getStud = () => {
    axios.get("http://localhost:5000/users")
      .then(res => setStudData(res.data))
      .catch(err => console.log(err))
  }

  const delStud = (id) => {
    console.log(userIndex);
    axios
      .delete(`http://localhost:5000/users/`+id)
      .then((response) => {
        console.log(response.data);
        let newList = studData.filter((ul) => ul.id !== id);
        console.log(newList);
         setStudData( newList );
        //  axios.post('https://phygitalitclinic.com/react/StudentDb/studData.php/',newList).then((res)=>console.log(res.data)).catch((err)=>console.log(err))

        // alert("Student deleted!");

      });
  }

  const updateStud = (id) => {
    const index = studData.findIndex(user => user.id === id);

    console.log(index);
    if (index !== -1) {
      localStorage.setItem("StudId", index);
      navigate(`/studentedit/${index}`);

    }
    else {
      console.log("false");
    }
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Class</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {studData?.map((d, index) =>
          <tbody key={index}>
            <tr>
              <th scope="row">{d.id}</th>
              <td >{d.name}</td>
              <td>{d.gender}</td>
              <td>{d.class}</td>
              <td><button onClick={(e) => updateStud(d.id, e)}>Update</button></td>
              <td><button onClick={(e) => delStud(d.id, e)}>Delete</button></td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}