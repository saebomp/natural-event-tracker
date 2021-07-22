import { useState, useEffect } from 'react';
import Map from './components/Maps'

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
      {!loading ? <Map eventData={eventData} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;

// 29:35
// https://www.youtube.com/watch?v=ontX4zfVqK8
// AIzaSyDneP7oCKWNUEjS7CEc2WDEYF77nOm1Oxg
//loading 될때 이미지 material ui에서 넣을것
