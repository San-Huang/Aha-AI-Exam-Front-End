
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
    const passwordFieldStyle = {
      marginTop: '50px',
      input: { 
        color: 'white',
        padding:'13px 9px',
        fontFamily: 'Ubuntu',
        fontSize:'16px',
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:'150%',
        letterSpacing:'0.15px',
      },
      '& .MuiOutlinedInput-root': {
        width: '335px',
        height: '58px',
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
      },
    }
    const passwordLabelStyle = {
      shrink: true,
      style: {
        color: 'white',
        fontFamily: 'Ubuntu',
        marginLeft:'2px',
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
            label="Birthday"
            type="Text"
            placeholder="mm/dd/yyyy"
            sx={passwordFieldStyle}
            InputLabelProps={passwordLabelStyle}
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
