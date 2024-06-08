import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
  return (

    <div>
     <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">adm no</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Roll no:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Parent Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">college</label>
                <textarea name="" id="" className="form-control"></textarea>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DOB</label>
                <input type="date" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email ID</label>
                <input type="text" className="form-control" />
              </div>
              <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#">STUDENT APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">AddStudent</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Search</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Delete</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link " href="#">View all</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Password</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Confirm Password</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <button className="btn btn-success">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default AddStudent