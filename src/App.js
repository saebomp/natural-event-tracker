import { useState, useEffect } from 'react';
import Map from './components/Maps'
import Header from './components/Header'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'absolute',
    top:'50%',
    left:'50%',
    zIndex:100,
    transform:'translate(-50%,-50%)'
  },
}));


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  const classes = useStyles();

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
      {!loading ? <Map eventData={eventData} /> : 
      <h1>
        <div className={classes.root}>
          <CircularProgress color="secondary"  />
          </div>
      </h1>}
    </div>
  );
}

export default App;


// https://eonet.sci.gsfc.nasa.gov/api/v2.1/events
// https://iconify.design/icon-sets/    //icons
// https://iconify.design/icon-sets/mdi/

// reference
// https://api.nasa.gov/
// https://www.youtube.com/watch?v=ontX4zfVqK8
// https://css-tricks.com/how-to-create-a-notebook-design-with-css/