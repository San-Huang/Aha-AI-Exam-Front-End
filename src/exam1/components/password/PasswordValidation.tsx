import React from 'react';
import { List,ListItem,ListItemText } from '@mui/material';
import { checkedIcon, unCheckedIcon } from '../../../assets/icon';
import { useState,useEffect } from 'react';
import { generateListItemStyle, generateListItemTextStyle } from './passwordStyle';
import * as style from './passwordStyle';

interface props {
    value: string
  }

export const PasswordValidation: React.FC<props> = ({ value }) => {

    const validationItem = [
        'Have at least one uppercase letter',
        'Have at least one lowercase letter',
        'Have at least one number',
        'Have at least one special character (!@#$...etc)',
        'Longer than 8 characters'
    ]

    const [validations, setValidations] = useState<boolean[]>([false, false, false, false, false])
    
    const validatePassword = (value: string) => {
        const validationsResult = [
          /[A-Z]/.test(value),               
          /[a-z]/.test(value),               
          /\d/.test(value),                  
          /[^\w\d]|[_]/.test(value), 
          value.length >= 8                  
        ]
        setValidations(validationsResult);
      }

      useEffect(() => {
        validatePassword(value);
      }, [value]);

  return(
      <List sx={style.listStyle}>
         {/* Since the height and margin of 'special character' item is different from the others, 
            it needs to be given a separate property. */}
         { validationItem.map((item, index) => {
           const isSpecial = item.includes('Have at least one special character (!@#$...etc)')
           const listItemStyle = generateListItemStyle(isSpecial ? '50px' : '40px')
           const listItemTextStyle = generateListItemTextStyle(isSpecial ? '5px 0' : '0')

            return (
                <ListItem sx={listItemStyle} key={index}>
                  { validations[index] 
                      ? <span style={style.iconStyle}>{checkedIcon}</span> 
                      : <span style={style.iconStyle}>{unCheckedIcon}</span>
                  } 
                  <ListItemText sx={listItemTextStyle} primary={item} />
                </ListItem>                
                )
              }
            )
          }
       </List>
    )
}