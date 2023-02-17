import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './traveldetails.styles.css'

import Axios from 'axios'


export default function TravelDetails({ dataId }) {

    const [planData, setPlanData] = useState([])

    const handleData = async() => {
        if(!dataId) return 
        const resp = await Axios.post("http://localhost:4000/get/plans", {dataId})
        resp?.data && setPlanData(resp.data)
        // console.log(resp.data);
    }

    useEffect(() => {
        console.log("Getting saved data ");
        handleData(); 
    }, [])

    console.log("plan_data ", planData);
    
  return (
    <div>
        <div className='head'>Saved trip Details</div>
        <div className='form'>
            <div className='label'>Name</div>
            <input 
                className='input'
                readOnly
                value={planData[0]?.name}
                placeholder='Name' 
            />

            <div className='label'>Email</div>
            <input 
                className='input'
                readOnly
                value={planData[0]?.email}
                placeholder='Email'
            />

            <div className='label'>Destination</div>
            <input 
                className='input'
                readOnly
                value={planData[0]?.destination}
                placeholder='Destination'
            />
            <div className='label'>No of Travelers</div>
            <input 
                className='input'
                readOnly
                value={planData[0]?.noOfTravelers}
                placeholder='Travelers'
            />

            <div className='label'>Budget Per Person</div>
            <input 
                className='input budget'
                readOnly
                value={planData[0]?.budgetPerPerson}
                placeholder='Budget'
            />

            <Link className='button' to="/">back</Link>
        </div>
    </div>
  )
}
