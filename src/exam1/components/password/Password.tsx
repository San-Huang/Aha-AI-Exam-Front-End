import { useState } from 'react';
import { Typography, TextField } from '@mui/material';
import { PasswordValidation } from './PasswordValidation';
import * as style from './passwordStyle';



export const Password = () => {

    const [inputValue, setInputValue] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    
    const handleInput = (event:any) => {
      setInputValue(event.target.value)
    }

    const onFocus = () => {
      setPasswordVisible(true);
    }

    return (
        <div>
          <Typography sx={style.passwordTitleStyle}>
            Password Input
          </Typography>
          
          <TextField
            id="outlined-password-input"
            label="Password"
            type="Password"
            placeholder="Password"
            sx={style.passwordFieldStyle}
            InputLabelProps={style.passwordLabelStyle}
            onChange={handleInput}
            onFocus={onFocus}
          />

          { passwordVisible && 
            <PasswordValidation value={inputValue} />
          }
        </div>
    )
}

