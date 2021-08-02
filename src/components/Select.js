import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  }
}));

const Select = ({type, changeType}) => {
  const classes = useStyles();
  // const [value, setValue] = useState(type);
  // console.log('valueeeee',value)

  const handleChange = (event) => {
    changeType(event.target.value);
  };

  return (
    <div className="selectBox">
      <FormControl component="fieldset">
      <FormLabel component="legend" className={classes.formControl}>Type</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChange}>
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="wildfires" control={<Radio />} label="Wildfires" />
        <FormControlLabel value="ice" control={<Radio />} label="Sea And Lake Ice" />
        <FormControlLabel value="storms" control={<Radio />} label="Storms" />
      </RadioGroup>
    </FormControl>
    </div>
  )
}

export default Select