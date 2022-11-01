import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const StudentForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      gender: '',
      class: ''
    },

    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      console.log(values);

      axios({
        method: 'post',
        url: 'https://phygitalitclinic.com/react/StudentDb/studData.php',
        data: values,
        config: { header: { 'Content-Type': 'multipart/form-data' } }
      })
        .then(function (response) {
          console.log(response.data);
          window.location.href = `/studentlist`
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <div>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  className="w-100"
                  alt="Sample photo" />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                  <form className="px-md-2" onSubmit={formik.handleSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor='name'>Name</label><br />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <select
                          name="gender"
                          value={formik.values.gender}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ display: "block" }}
                          required
                        >
                          <option value="" label="Gender">
                            Gender
                          </option>
                          <option value="Female" label="Female">
                            Female
                          </option>
                          <option value="Male" label="Male">
                            Male
                          </option>
                          <option value="Other" label="Other">
                            Other
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <select
                        name="class"
                        value={formik.values.class}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ display: "block" }}
                      >
                        <option value="" label="Class">
                          Class
                        </option>
                        <option value="Class 1" label="Class 1">
                          Class 1
                        </option>
                        <option value="Class 2" label="Class 2">
                          Class 2
                        </option>
                        <option value=" Class 3   " label=" Class 3">
                          Class 3        </option>
                      </select>
                    </div>
                    <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div className="col-md-6">
                      </div>
                    </div>
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