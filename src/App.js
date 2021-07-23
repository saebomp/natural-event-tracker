import { useState, useEffect } from 'react';
import Map from './components/Maps'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await res.json()

      setEventData(events)
      setLoading(false) //fetch 끝나면 loading 을 false로 만듬
    }
    fetchEvents()
    // console.log(eventData)
  }, []) //dependency array
  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;

// 29:35
// https://www.youtube.com/watch?v=ontX4zfVqK8
// AIzaSyDneP7oCKWNUEjS7CEc2WDEYF77nOm1Oxg      //googlemap api key
// https://eonet.sci.gsfc.nasa.gov/api/v2.1/events
//loading 될때 이미지 material ui에서 넣을것
// location info box 에서 x 누르면 locationInfo를 false로 바꿀것
