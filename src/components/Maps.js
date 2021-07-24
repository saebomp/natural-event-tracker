import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map(ev => {
    if(ev.categories[0].id === 8) {
      return <LocationMarker
        lat={ev.geometries[0].coordinates[1]}
        lng={ev.geometries[0].coordinates[0]}
        onClick={()=> setLocationInfo({id:ev.id, title:ev.title})}
      />
    }
  })
  const closeBox = (ex) => {
    setLocationInfo(null)
  }
  //LocationInfoBox에서 closeBox 펑션을 받아와서 locationInfo값을 null만듦 

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyDneP7oCKWNUEjS7CEc2WDEYF77nOm1Oxg'}}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} closeBox={closeBox} />}
      {/* locationInfo 가 true이면 LocationInfoBox 보여줌 */}
    </div>
  )
}

Map.defaultProps = {
  center:{
    lat:49.246292,
    lng:-123.116226
  },
  zoom:6
}
export default Map

// https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs