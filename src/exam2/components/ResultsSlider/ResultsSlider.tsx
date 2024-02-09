import React, {useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Slider,Typography, Divider} from '@mui/material';


const ResultsSlider  = ({ pageSize, setPageSize }: any) => {
  const SliderBoxStyle = {
    textAlign: 'left',
  }
  const SliderStyle = {
    width: '725px',
    height:'8px',
    transition: 'width 0.7s ease',
    '@media (max-width: 1300px)': {
      width: '500px', 
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-thumb': {
      width:' 20px',
      height: '20px',
      backgroundColor: '#1B1B1B',
      border:'6px solid #FFD05D'
    },
    '& .MuiSlider-track': {
      border: 'none',
      backgroundImage: 'linear-gradient(to right, #FF5C01, #FFD25F)',
    },
    '& .MuiSlider-rail': {
      color: 'rgba(255, 255, 255, 0.3)',
    },
   
  }
  const SliderValueStyle = {
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%', 
    letterSpacing: '0.15px',
  }
  const dividerStyle = {
    width: '725px',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: '30px 0px 335px 0px',
    transition: 'width 0.7s ease',
    '@media (max-width: 1300px)': {
      width: '500px',
      height: '1px', 
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      margin: '30px 0px 335px 0px',
    },
  }


  const range = [
    { value: 0.5, label: <Typography>3</Typography> },
    { value: 17.3, label: <Typography>6</Typography> },
    { value: 36, label: <Typography>9</Typography> },
    { value: 54.8, label: <Typography>12</Typography> },
    { value: 73.6, label: <Typography>15</Typography> },
    { value: 99, label: <Typography>50</Typography> },
  ]


  const [value, setValue] = useState(73.6);
  const [marks, setMarks] = useState(range);
  
  const handleChange = ( data:any ) => {
    setValue(data.target.value);
    const newValue = data.target.value
    const foundItem: any = range.find((item) => item.value === newValue);
    const labelChildren = foundItem.label.props.children
    setPageSize(labelChildren)
  };

  useEffect(() => {
    const updatedMarks = marks.map((mark) => ({
      ...mark,
      label: <Typography 
                sx={SliderValueStyle} 
                color={value === mark.value ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.3)'}>
              {mark.label.props.children}
             </Typography>,
    }));

    setMarks(updatedMarks)
  }, [value]);
  
    return(
      <Box sx={SliderBoxStyle}> 
          <Slider
            sx={SliderStyle}
            defaultValue={pageSize}
            marks={marks}
            step={null}
            value={value}
            onChange={handleChange}
          />
          <Divider sx={dividerStyle} />
      </Box>
    )
}

export default ResultsSlider