import {useState} from 'react'

const LocationInfoBox = ({info, closeBox}) => {
  const handleChange = (event) => {
    closeBox(event)
  }
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>ID : {info.id}</li>
        <li>TITLE : {info.title}</li>
      </ul>
      <p className="closeBtn" onClick={handleChange}>X</p>
    </div>
  )
}

export default LocationInfoBox