import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
export default function StudentList() {

  const [studData, setStudData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStud();
  }, [])

  const getStud = () => {
    axios.get('http://localhost:3000/users').then(function (res) {
         console.log(res.data)
        setStudData(res.data)
      })
      .catch(err => console.log(err))
  }

  const deletePost = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(res=>console.log(res.data)).catch(err=>console.log(err))
  };

  const updateStud = (id) => {
    
    const index = studData.findIndex(stud => stud.id === id);

    if (index !== -1) {
      localStorage.setItem("StudId", id);
      navigate(`/studentedit/${id}`);
    }
    else {
      console.log("Not found");
    }
  }

  const addUser = () => {
    navigate('/');
  }
  return (
    <div>
      <div className='d-flex justify-content-end p-3'><button type="button" className='btn btn-dark p-2' onClick={addUser}>Add User</button></div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        {studData.map((d, index) =>
          <tbody key={index}>
            <tr>
              <td>{d.id}</td>
              <td>
                <div className="d-flex align-items-center">
                  {/* <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt style={{ width: 45, height: 45 }} className="rounded-circle" /> */}
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{d.name}</p>

                  </div>
                </div>
              </td>
              <td>
              <p className="fw-normal mb-1">{d.email}</p>
              </td>
             
              <td> <button type="button" className="btn btn-info btn-sm btn-rounded" onClick={() => updateStud(d.id)}>
                Edit
              </button></td>
              <td>
                <button type="button" className="btn btn-danger btn-sm btn-rounded" onClick={(e) => deletePost(d.id, e)}>
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}








