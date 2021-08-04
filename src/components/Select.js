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
  },
  labelWrap: {
    flexDirection:'row',
    alignItems:'center',
    flexBasis:'50%'
  },
  label :{
    width:'180px'
  }
}));

const labels = [
  {label: "All", count: 1},
  {label: "Wildfires", count:2},
  {label: "Sea And Lake Ice", count:3},
  {label: "Storms", count:400}
]

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
      <RadioGroup aria-label="type" className={classes.labelWrap} name="type" value={type} onChange={handleChange}>
        <FormControlLabel value="all" control={<Radio />} label={labels[0].label} className={classes.label} /> <span className="count">{labels[0].count}</span>
        <FormControlLabel value="wildfires" control={<Radio />} label={labels[1].label} className={classes.label} /> <span className="count">{labels[1].count}</span>
        <FormControlLabel value="ice" control={<Radio />} label={labels[2].label} className={classes.label} /> <span className="count">{labels[2].count}</span>
        <FormControlLabel value="storms" control={<Radio />} label={labels[3].label} className={classes.label} /> <span className="count">{labels[3].count}</span>
      </RadioGroup>
    </FormControl>
    </div>
  )
}

export default Select