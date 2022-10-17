import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import api from '../api';

const StudentForm = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },

    onSubmit: values => {
      // console.log(JSON.stringify(values, null, 2));
      console.log(values);

      axios({
        method: 'post',
        url: api,
        data: values,
        config: { header: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' } }
      })
        .then(function (response) {
          console.log(response.data);
          navigate('/studentlist');
          // window.location.href = `/studentlist`
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  });

  return (
    <div>
      <section className="h-auto h-custom" style={{ backgroundColor: '#8fc4b7' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" className="w-100" style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }} alt="Sample photo" />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                  <form className="px-md-2" onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Name" name='name' value={formik.values.name} onChange={formik.handleChange} /> </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <div className="input-group">
                            <input className="form-control" type="text" name='email' value={formik.values.email} onChange={formik.handleChange} placeholder="Email ID" /> </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <div className="input-group">
                            <input className="form-control" type="text" name='mobile' value={formik.values.mobile} onChange={formik.handleChange} placeholder="Mobile" /> </div>
                        </div>
                      </div>
                    </div> */}
                    <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default StudentForm;