import React from 'react';
import './Register.css';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {


    // form state
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [state, setState] = useState('');
    const [addrtype, setAddrType] = useState('Fluids/CFD Engineer (Job)')
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    // submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(firstname,lastname,email,address1,address2,state,addrtype,dob,gender,phone)
        const data = {
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            Address1: address1,
            Address2: address2,
            State: state,
            AddType: addrtype,
            DOB: dob,
            Gender: gender,
            Phone: phone
        }
        axios.post('https://sheet.best/api/sheets/6fc743ca-ed4d-4083-ba00-b675acf8d903', data).then((responce) => {
            console.log(responce);
            // clearing Field Form
            setFirstname('');
            setLastname('');
            setEmail('');
            setAddress1('');
            setAddress2('');
            setState('');
            setAddrType('');
            setDob('');
            setGender('');
            setPhone('');

        })
    }
    return (
        <>
            <div class="Register">
                <form onSubmit={handleSubmit}>
                    <div class="row jumbotron box8">
                        <div class="col-sm-12 mx-t3 mb-4">
                            <h2 class="text-center text-info">Register</h2>
                        </div>
                        <div class="col-sm-12 form-group">
                            <label for="name-f">First Name</label>
                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Enter your first name." onChange={(e) => setFirstname(e.target.value)} value={firstname}  required />
                        </div>
                        <div class="col-sm-12 form-group">
                            <label for="name-l">Last name</label>
                            <input type="text" class="form-control" name="lname" id="name-l" placeholder="Enter your last name."  onChange={(e) => setLastname(e.target.value)} value={lastname} required />
                        </div>
                        <div class="col-sm-12 form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email."  onChange={(e) => setEmail(e.target.value)} value={email} required />
                        </div>
                        <div class="col-sm-12 form-group">
                            <label for="address-1">Address Line-1</label>
                            <input type="address" class="form-control" name="Locality" id="address-1" placeholder="Locality/House/Street no."  onChange={(e) => setAddress1(e.target.value)} value={address1} required />
                        </div>
                        <div class="col-sm-12 form-group">
                            <label for="address-2">Address Line-2</label>
                            <input type="address" class="form-control" name="address" id="address-2" placeholder="Village/City Name."  onChange={(e) => setAddress2(e.target.value)} value={address2} required />
                        </div>
                        <div class="col-sm-12 form-group">
                            <label for="State">State</label>
                            <input type="address" class="form-control" name="State" id="State" placeholder="Enter your state name."  onChange={(e) => setState(e.target.value)} value={state} required />
                        </div>
                        <div class="col-sm-12 form-group">
                            <label for="Country">Job/Intership</label>
                            <select class="form-control custom-select browser-default" onChange={(e) => setAddrType(e.target.value)} value={addrtype} required>
                                <option  selected value="Fluids/CFD Engineer">Fluids/CFD Engineer (Job)</option>
                                <option value="Electronics Engineer">Electronics Engineer (Job)</option>
                                <option value="Electronics and Communications">Electronics and Communications (Internship)</option>
                                <option value="AI/ML Enthu Cutlet">AI/ML Enthu Cutlet (Internship)</option>
                                <option value="Business Development and Process Managers">Business Development and Process Managers (Internship)</option>
                                <option value="Developers">Developers (Internship)</option>
                                <option value="Graphic Designer">Graphic Designer (Internship)</option>
                            </select>
                        </div>
                        <div class="col-sm-6 form-group">
                            <label for="Date">Date Of Birth</label>
                            <input type="Date" name="dob" class="form-control" id="Date" placeholder="" onChange={(e) => setDob(e.target.value)} value={dob} required />
                        </div>
                        <div class="col-sm-6 form-group">
                            <label for="sex">Gender</label>
                            <select id="sex" class="form-control browser-default custom-select" onChange={(e) => setGender(e.target.value)} value={gender} required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unspesified">Unspecified</option>
                            </select>
                        </div>
                        
                        <div class="col-sm-12 form-group">
                            <label for="tel">Phone</label>
                            <input type="tel" name="phone" class="form-control" id="tel" placeholder="Enter Your Contact Number."  onChange={(e) => setPhone(e.target.value)} value={phone} required />
                        </div> 
                        <div className="button">
                            <button className="submit">
                            Submit
                            </button>
                        </div>

                    </div>
                </form>
            </div>
            
        </>
    )
}

export default Register