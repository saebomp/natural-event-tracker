import React from 'react'

const LocationInfoBox = ({info, closeBox}) => {
  // console.log('innffffoooo', info)
  const handleChange = (event) => {
    closeBox(event)
  }
  return (
    <div className="location-info">
      <div className="lines"></div>
      <h2>Event Location Info</h2>
      <ul className="list">
        <li><span>TYPE : </span>{info.type}</li>
        <li><span>ID : </span>{info.id}</li>
        <li><span>TITLE : </span>{info.title}</li>
      </ul>
      <p className="closeBtn" onClick={handleChange}>X</p>
    </div>
  )
}

export default LocationInfoBox