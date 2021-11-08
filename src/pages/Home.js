import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }
    const [data, setData] = useState([])

    useEffect(() => {
        getRecords()
    }, [])

    const getRecords = async () => {
        const response = await axios.get('https://care-box-backend.herokuapp.com/api/v1/applicant_test/')
        if (response.status === 200) {
            setData(response.data)
        }
    }

    const renderData = (data, index) => {
        return (
            <tr key={index}>
                <td>{data.Title}</td>
                <td>{data.Author_Name}</td>
                <td>{data.Phone}</td>
                <td>{data.Email}</td>
                <td>{data.Description}</td>
                <td className='d-flex'>
                    <Link to={`/update/${data.id}`}>
                        <button className='btn-success btn-edit m-1'>Update</button>
                    </Link>
                </td>
            </tr>
        )
    }

    return (
        <section>
            <div style={containerStyle} className="row container-fluid">
                <div className="col-md-2">
                    <h1 className='p-5'>Records</h1>
                </div>

                <div className="col-md-10">
                    <div className='p-3 table-responsive-sm table-responsive-md table-responsive-lg'>
                        <ReactBootstrap.Table striped bordered hover size="sm" >
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author_Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(renderData)}
                            </tbody>
                        </ReactBootstrap.Table>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Home;