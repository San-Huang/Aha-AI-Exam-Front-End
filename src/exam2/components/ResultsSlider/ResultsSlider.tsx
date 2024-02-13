import React, {useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Slider,Typography, Divider} from '@mui/material';
import * as style from './ResultsSliderStyle';

const ResultsSlider  = ({ pageSize, setPageSize }: any) => {
  
  const range = [
    { value: 0.5, label: <Typography>3</Typography> },
    { value: 18.9, label: <Typography>6</Typography> },
    { value: 37.4, label: <Typography>9</Typography> },
    { value: 56.5, label: <Typography>12</Typography> },
    { value: 75.2, label: <Typography>15</Typography> },
    { value: 99.3, label: <Typography>50</Typography> },
  ]

  const [value, setValue] = useState(75.2)
  const [marks, setMarks] = useState(range)
  
  const handleChange = ( data:any ) => {
    setValue(data.target.value)
    const newValue = data.target.value
    const foundItem: any = range.find((item) => item.value === newValue)
    const labelChildren = foundItem.label.props.children
    setPageSize(labelChildren)
  }

  useEffect(() => {
    const updatedMarks = marks.map((mark) => ({
      ...mark,
      label: <Typography 
                sx={style.sliderValueStyle} 
                color={value === mark.value ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.3)'}>
                  {mark.label.props.children}
             </Typography>,
    }))

    setMarks(updatedMarks)
  }, [value])
  
    return(
      <Box sx={style.sliderBoxStyle}> 
          <Slider
            sx={style.sliderStyle}
            defaultValue={pageSize}
            marks={marks}
            step={null}
            value={value}
            onChange={handleChange}
          />
          <Divider sx={style.dividerStyle} />
      </Box>
    )
}

export default ResultsSlider;