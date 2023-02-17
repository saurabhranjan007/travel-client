import React from 'react'
import './home.styles.css'

import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <>
        <div className='navbar'>
            <nav className='nav'>
                <ul className='ul'>
                    <li className='li'>
                        <a href='/' className='anch'>Travelopia</a>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}
