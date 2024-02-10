import { useState } from 'react';
import { Typography, TextField } from '@mui/material';
import { PasswordValidation } from './PasswordValidation'


export const Password = () => {
      
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
        width: '334px',
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
      },
    }
    const passwordLabelStyle = {
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

    const [inputValue, setInputValue] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const handleInput = (event:any) => {
    setInputValue(event.target.value)
    }


    const onFocus = () => {
      setPasswordVisible(true);
    }


    return (
        <div style={{
          textAlign: 'center',
          
          }}>
          <Typography sx={passwordTitleStyle}>
            Password Input
          </Typography>
          
          <TextField
            id="outlined-password-input"
            label="Password"
            type="Password"
            placeholder="Password"
            sx={passwordFieldStyle}
            InputLabelProps={passwordLabelStyle}
            onChange={handleInput}
            onFocus={onFocus}
          />
          { passwordVisible && 
          <PasswordValidation value={inputValue} />
          }
        </div>
    )
}

