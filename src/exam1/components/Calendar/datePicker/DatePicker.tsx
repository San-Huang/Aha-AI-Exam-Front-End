
import { FC, useState } from 'react';
import { Typography, TextField } from '@mui/material'
import Calendar from '../Calendar';
import './DatePicker.css'

type Props = {
    date?: Date
    onChange?: (value?: Date) => void;
  }

 const DatePicker: FC<Props> = ({date, onChange = () => { } }) => {

    const [pickerVisible, setPickerVisible] = useState(false)
    const [currentDate, setCurrentDate] = useState(date);
      
    const passwordTitleStyle = {
      marginTop: '50px',
      color: 'white',
      fontFamily: 'Ubuntu',
      fontSize:'40px',
      fontWeight:'700',
      letterSpacing:'-1.5px',
      
    }
    const birthdayFieldStyle = {
      marginTop: '50px',
      input: { 
        color: 'white',
        padding:'2px 9px 0px 12px',
        fontFamily: 'Ubuntu',
        fontSize:'16px',
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:'150%',
        letterSpacing:'0.15px',
      },
      '& .MuiOutlinedInput-root': {
        width: '335px',
        height: '57px',
        backgroundColor:'none',
        '& fieldset': {
          border: '3px solid rgba(255, 255, 255, 0.50)',
          borderRadius: '8px',
          transition: '0.3s', 
        },
        '&:hover fieldset': {
          borderColor: 'white',
          transition: '0.3s', 
        },
        '&.Mui-focused fieldset': {
          border: '3px solid #00A3FF',
        },
      },
      '& input::placeholder': {
        color: 'rgba(255, 255, 255, 0.5)',
        padding: '0px 0px 0px 3px',
      },
    }
    const birthdayLabelStyle = {
      shrink: true,
      style: {
        color: 'white',
        fontFamily: 'Ubuntu',
        marginLeft:'2px',
        fontWeight: '400',
        lineHeight: '18px',
        letterSpacing: '0.4px',
        marginTop: '3px',
      },
    }

      const onFocus = () => {
        setPickerVisible(true);
      }

      const selectDate = (date: Date) => {
        setCurrentDate(date)
        onChange(date)
        setPickerVisible(false)
    }

    const onCancel = () => {
        setPickerVisible(false);
      }

    const showDate = (date:Date) => {
        const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
        const formattedDate = date.toLocaleString('en-US', options);
        return formattedDate;
      };


    return (
        <div style={{
          textAlign: 'center',
          }}>
          <Typography sx={passwordTitleStyle}>
            Date Picker
          </Typography>
          
          <TextField
            id="outlined-password-input"
            label="Birthday&nbsp;"
            type="Text"
            placeholder="mm/dd/yyyy"
            sx={birthdayFieldStyle}
            InputLabelProps={birthdayLabelStyle}
            onFocus={onFocus}
            InputProps={{ readOnly: true }}
            value={currentDate && showDate(currentDate)}
          />

         { pickerVisible && 
            <div className='show-calender'>
            <Calendar date={currentDate} onCancel={onCancel} onChange={selectDate} title={'Birthday'}/>
            </div>
             }
          
        </div>
    )
}


export default DatePicker
