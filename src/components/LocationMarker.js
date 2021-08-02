import {Icon} from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire'
import weatherWindy from '@iconify-icons/mdi/weather-windy';
import hexagonMultipleOutline from '@iconify-icons/mdi/hexagon-multiple-outline';

const LocationMarker = ({lat, lng, id, onClick, type}) => {
  // console.log('typeeeee', type)

  return (
    <div className="location-marker" onClick={onClick}>
      
      {id === 8 ?
      <Icon icon={fireIcon} className="location-icon fire" />
      : id === 10 ?
      <Icon icon={weatherWindy} className="location-icon storm" />
      : id === 15 ?
      <Icon icon={hexagonMultipleOutline} className="location-icon ice" />
      : null
      }
    </div>
  )
}

export default LocationMarker