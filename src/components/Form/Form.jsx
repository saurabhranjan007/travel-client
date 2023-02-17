import React, { useState } from 'react'
import './form.styles.css'

import Axios from 'axios'
import validator from 'validator'

import { Link, useNavigate } from "react-router-dom";

export default function Form({ setDataId }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dest, setDest] = useState('India')
    const [noTravelers, setNoTravelers] = useState('Two')
    const [budget, setBudget] = useState('100')

    const destination = [
        {id: 1, value: "India"},
        {id: 2, value: "Africa"},
        {id: 3, value: "Europe"}
    ]

    const travelers = [
        {id: 1, value: "One"},
        {id: 2, value: "Two"},
        {id: 3, value: "Three"},
        {id: 4, value: "Four"},
        {id: 5, value: "Five"},
        {id: 6, value: "Six"},
        {id: 7, value: "Seven"},
        {id: 8, value: "Eight"},
        {id: 9, value: "Nine"},
        {id: 10, value: "Ten"},
    ]

    const data = {
        name: name,
        email: email, 
        dest: dest, 
        noTravelers: noTravelers, 
        budget: "$"+budget, 
    }

    const navigate = useNavigate(); 

    const handleSubmit = async() => {
        console.log("Submiting form.. data ", data);

        if(data && (!data.name || !data.email)) {
            alert("Name and Email are requierd!!")
            return
        } else if (data?.email && !validator.isEmail(data.email)) {
            alert("Invalid email addredd")
            return
        } else {
            const addPlan = await Axios.post("http://localhost:4000/create/plan", {data})
            const res = await addPlan.data; 
            console.log("add_res ", res);
            if(res?._id) {
                setDataId(res._id)
                navigate("/trip/details")
            } 
        }
    }

    
  return (
    <div>
        <div className='head'>Plan your trip</div>
        
        <div className='form'>
            <div className='label'>Name</div>
            <input 
                type='text' 
                name='name'
                id='name'
                placeholder='Enter your name' 
                required
                onChange={(e) => setName(e.target.value)}
            />
            <br />

            <div className='label'>Email</div>
            <input 
                type="email" 
                name='email'
                id='email'
                placeholder='Enter your email'
                required 
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className='label'>Destination</div>
            <select
                id='destination'
                name='destination'
                required
                onChange={(e) => setDest(e.target.value)}
            >
                {destination?.map((data) => (
                    <option key={data.id} value={data.value} className=''>
                        {data.value}
                    </option>
                ))}
            </select>

            <div className='label'>No of Travelers</div>
            <select
                id='travelers'
                name='travelers'
                required
                onChange={(e) => setNoTravelers(e.target.value)}
            >
                {travelers?.map((data) => (
                    <option key={data.id} value={data.value} className=''>
                        {data.value}
                    </option>
                ))}
            </select>

            <div className='label'>Budget Per Person</div>
            <input 
                className='budget-input'
                placeholder='$100'
                type='number'
                onChange={(e) => setBudget(e.target.value)}
                required 
            /> USD

            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
