import React from 'react'
import { NavLink } from 'react-router-dom'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export const JjfHeader = () => {
  return (
    <header className='header'>
      <nav>
        <NavLink id='title' to='/'><span>Autocaravanas</span></NavLink>
        <NavLink className="secs" to='int'>Integrales</NavLink>
        <NavLink to='anfi'><AirportShuttleIcon/><span>Amphitryon</span></NavLink>
        <NavLink to='fast'><AirportShuttleIcon/><span>Rapido M96</span></NavLink>        
        <NavLink className="secs" to='perf'>Perfiladas</NavLink>
        <NavLink to='mil'><AirportShuttleIcon/><span>Mileo297</span></NavLink>
      </nav>
    </header>
  )
}
