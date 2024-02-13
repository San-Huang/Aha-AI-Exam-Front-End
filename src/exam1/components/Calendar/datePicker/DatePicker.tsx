
import React, { FC, useState } from 'react';
import { Typography, TextField } from '@mui/material';
import Calendar from '../Calendar';
import * as style from './DatePickerStyle';


type Props = {
    date?: Date
    onChange?: (value?: Date) => void
  }

 const DatePicker: FC<Props> = ({ date, onChange = () => {} }) => {

    const [pickerVisible, setPickerVisible] = useState(false)
    const [currentDate, setCurrentDate] = useState(date)

    const onFocus = () => {
        setPickerVisible(true)
      }

    const selectDate = (date: Date) => {
        setCurrentDate(date)
        onChange(date)
        setPickerVisible(false)
    }

    const onCancel = () => {
        setPickerVisible(false)
      }

    const showDate = (date:Date) => {
        const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' }
        const formattedDate = date.toLocaleString('en-US', options)
        return formattedDate
      }

    return (
      <div>
        <Typography sx={style.passwordTitle}>
          Date Picker
        </Typography>
          
        <TextField
          label="Birthday&nbsp;"
          type="Text"
          placeholder="mm/dd/yyyy"
          sx={style.birthdayField}
          InputLabelProps={style.birthdayLabel}
          onFocus={onFocus}
          InputProps={{ readOnly: true }}
          value={currentDate && showDate(currentDate)}
        />

        { pickerVisible && 
            <Calendar 
              date={currentDate} 
              onCancel={onCancel} 
              onChange={selectDate} 
              title={'Birthday'}
            />
        }
      </div>
    )
}


export default DatePicker;
