import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import axios from 'axios';
import moment from 'moment'
import "./AddEdit.css"
import { toast } from 'react-toastify';

const initialState = {
    Title: "",
    Author_Name: "",
    Phone: "",
    Email: "",
    Description: "",
    Posted_At: moment().format('L')
}

const AddEdit = () => {
    const [state, setState] = useState(initialState)
    const { Title, Author_Name, Phone, Email, Description } = state;
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getSingleRecord(id)
        }
    }, [id])

    const getSingleRecord = async (id) => {
        const response = await axios.get(`https://care-box-backend.herokuapp.com/api/v1/applicant_test/${id}/`);
        if (response.status === 200) {
            setState({ ...response.data[0] })
        }
    }

    const addRecord = (data) => {
        const formData = new FormData()
        formData.append('Title', data.Title);
        formData.append('Author_Name', data.Author_Name);
        formData.append('Phone', data.Phone);
        formData.append('Email', data.Email);
        formData.append('Description', data.Description);
        axios.post('https://care-box-backend.herokuapp.com/api/v1/applicant_test/', formData)
            .then(response => {
                if (response.status === 200) {
                    toast.success('Data Added')
                }
            })
    }

    const updateRecord = (data, id) => {
        const formData = new FormData()
        formData.append('Title', data.Title);
        formData.append('Author_Name', data.Author_Name);
        formData.append('Phone', data.Phone);
        formData.append('Email', data.Email);
        formData.append('Description', data.Description);
        axios.put(`https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/${id}`, formData , {
            headers: {
                "Custom-User-Agent": "gsdf#g3243F466$"
            }
        }
        )
            .then(response => {
                if (response.status === 200) {
                    toast.success('Update Data')
                    console.log(formData)
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Title || !Author_Name || !Phone || !Email || !Description) {
            toast.error("Provide the value of each field")
        }
        else {
            if (!id) {
                addRecord(state)
            }
            else {
                console.log(state, id)
                updateRecord(state, id)
            }
            setTimeout(() => history.push('/'), 500)
        }
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    return (
        <div className="row container-fluid">
            <div className="col-md-3">
            </div>
            <div className="col-md-9">
                <div style={{ width: '100%', background: '#F5F6FA', borderRadius: '10px', padding: '30px 50px' }} className="col-md-6 mt-5">
                    {/* <h5 className="text-brand">Add Records</h5> */}
                    <form onSubmit={handleSubmit} method="post">
                        <div class="form-group">
                            <label htmlFor="Title">Title</label>
                            <input type="" class="form-control" id="Title" name="Title" placeholder="Enter Title..." onChange={handleInputChange} value={Title} />

                            <label htmlFor="Author_Name">Author_Name</label>
                            <input type="text" class="form-control" id="Author_Name" name="Author_Name" placeholder="Enter Author_Name..." onChange={handleInputChange} value={Author_Name} />

                            <label htmlFor="Phone">Phone</label>
                            <input type="number" class="form-control" id="Phone" name="Phone" placeholder="Enter Phone No..." onChange={handleInputChange} value={Phone} />

                            <label htmlFor="Email">Email address</label>
                            <input type="Email" class="form-control" id="Email" name="Email" aria-describedby="emailHelp" placeholder="Enter email..." onChange={handleInputChange} value={Email} />

                            <label htmlFor="Description">Description</label>
                            <textarea class="form-control" id="Description" name="Description" placeholder="Enter Description..." onChange={handleInputChange} value={Description} rows="3"></textarea>
                        </div>
                        <input type="submit" class="form-control text-white" value={id ? "Update" : "Add"} style={{ background: 'green', }} />
                    </form>
                </div>
            </div>
        </div>
    );
};
export default AddEdit;



