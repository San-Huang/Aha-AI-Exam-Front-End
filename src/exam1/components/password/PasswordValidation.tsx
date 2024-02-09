import React from 'react'
import { List,ListItem,ListItemText } from '@mui/material'
import { checkedIcon, unCheckedIcon } from '../../../assets/icon'
import { useState,useEffect } from 'react'

interface props {
    value: string;
  }

export const PasswordValidation: React.FC<props> = ({value}) => {

    const validationItem = [
        'Have at least one uppercase letter',
        'Have at least one lowercase letter',
        'Have at least one number',
        'Have at least one special character (!@#$...etc)',
        'Longer than 8 characters'
    ]
    const ListStyle = {
        width: '311px',
        height: '210px',
        borderRadius: '8px',
        backgroundColor: '#242424',
        color: 'white',
        margin: 'auto',
        marginTop: '15px',
        boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.30)',
        position: 'flex',
        alignItems:'center',
        padding: '8px 12px 8px 12px',
      };
    const generateListItemStyle = (height = '0') => ({ 
        paddingLeft: '0',
        width: '311px',
        height,
    })
    const generateListItemTextStyle = (margin = '0') => ({
        '& .MuiListItemText-primary':{
            height:'24px',
            width: '273px',
            padding: '8px 16px 8px 0px',
            fontFamily: 'Ubuntu',
            fontSize:'14px',
            fontStyle:'normal',
            fontWeight:'400',
            lineHeight:'150%',
            letterSpacing:'0.25px',
            display: 'flex',
            alignItems: 'center',
            margin,
        }
    })
    const IconStyle ={
        padding: '2px 12px 2px 2px',
        display: 'flex',
        alignItems: 'center',
    }

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
        <List sx={ListStyle} aria-label="mailbox folders">
            {validationItem.map((item, index) => {
                const isSpecial = item.includes('Have at least one special character (!@#$...etc)')
                const ListItemStyle = generateListItemStyle(isSpecial ? '50px' : '40px')
                const ListItemTextStyle = generateListItemTextStyle(isSpecial ? '5px 0' : '0')
                return (
                    <ListItem sx={ListItemStyle} key={index}>
                        {validations[index] 
                            ? <span style={IconStyle}>{checkedIcon}</span> 
                            : <span style={IconStyle}>{unCheckedIcon}</span>} 
                        <ListItemText sx={ListItemTextStyle} primary={item}/>
                    </ListItem>                
                    )
                }
            )}
        </List>
    )
}