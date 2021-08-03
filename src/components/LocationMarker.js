import {Icon} from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire'
import weatherWindy from '@iconify-icons/mdi/weather-windy';
import hexagonMultipleOutline from '@iconify-icons/mdi/hexagon-multiple-outline';

const LocationMarker = ({lat, lng, id, onClick, type}) => {

  return (
    <div className="location-marker" onClick={onClick}>
      
      {type === 'all' && id === 8 ?
      <Icon icon={fireIcon} className="location-icon fire" />
      : type === 'all' && id === 10 ?
      <Icon icon={weatherWindy} className="location-icon storm" />
      : type === 'all' && id === 15 ?
      <Icon icon={hexagonMultipleOutline} className="location-icon ice" />
      : null
      }

      {type === 'wildfires' && id === 8 ?
       <Icon icon={fireIcon} className="location-icon fire" />
      : null
      }
      {type === 'storms' && id === 10 ?
       <Icon icon={weatherWindy} className="location-icon storm" />
      : null
      }
      {type === 'ice' && id === 15 ?
       <Icon icon={hexagonMultipleOutline} className="location-icon ice" />
      : null
      }
    </div>
  )
}

export default LocationMarker