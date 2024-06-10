import React, { useState } from 'react'
import NavBar from './NavBar'

const VieewStudent = () => {
    const [data,changeData] = useState(
        [
            { "name" : "ann", "adno": 23, "rollno": 1 },
            { "name": "dev", "adno": 24, "rollno": 2 },
            { "name": "das", "adno": 25, "rollno": 3 }
        ]

    )
   
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card">
                                            <img src="https://i0.wp.com/vssmn.org/wp-content/uploads/2018/12/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png?fit=860%2C681&ssl=1" class="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.name}</h5>
                                                <p className="card-text">{value.adno}</p>
                                                <p className="card-text">{value.rollno}</p>
                                              
                                            </div>
                                        </div>
                                    </div>
                                }

                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VieewStudent