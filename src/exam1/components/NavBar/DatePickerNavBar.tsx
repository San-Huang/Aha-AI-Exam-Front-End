import {Paper,MenuList,MenuItem} from '@mui/material';
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

const DatePickerNavBar = () => {

const NavPaperStyle = {
    backgroundColor:'#1B1B1B',
    width: '80px',
    height: '100vh',
    position: 'absolute',
    borderRadius: '0',
    marginTop: '-50px'
}
const MenuListStyle ={
    display:'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0'
}

const HomeIconStyle = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    letterSpacing: '0.4px',
    color: '#6A6A6A',
    padding: '18px 0px 0px 0px',
    marginTop: '100px',
    transition: '0.3s', 
    '&:hover': {
        color: '#00A3FF', 
  },
}

const FocusIconStyle = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    letterSpacing: '0.4px',
    color: 'white',
    padding: '18px 0px 0px 0px',
    marginTop: '30px',
    transition: '0.3s', 
    '&:hover': {
        color: '#00A3FF', 
  },
}

const NonFocusIconStyle = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    letterSpacing: '0.4px',
    color: '#6A6A6A',
    padding: '18px 0px 0px 0px',
    marginTop: '30px',
    transition: '0.3s', 
    '&:hover': {
        color: '#00A3FF', 
  },
}


return(
    <div>
         <Paper sx={NavPaperStyle}>
            <MenuList
                sx={MenuListStyle}
            >
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <MenuItem sx={HomeIconStyle} disableRipple>
                            <HomeRoundedIcon />
                            <span>Home</span>
                    </MenuItem>
                </Link>
                <Link to='/exam1/password' style={{ textDecoration: 'none' }}>
                    <MenuItem sx={NonFocusIconStyle} disableRipple>
                            <PasswordRoundedIcon />
                            <span>Password</span>
                    </MenuItem>
                </Link>
                <Link to='/exam1/calendar' style={{ textDecoration: 'none' }}>
                    <MenuItem  sx={NonFocusIconStyle} disableRipple>
                        <CalendarTodayRoundedIcon />
                        <span>Calendar</span>
                    </MenuItem>
                </Link>
                <Link to='/exam1/datePicker' style={{ textDecoration: 'none' }}>
                    <MenuItem  sx={FocusIconStyle} disableRipple>
                        <CalendarMonthRoundedIcon />
                        <span>Date Picker</span>
                    </MenuItem>
                </Link>
            </MenuList>
        </Paper>
    </div>
)
}

export default DatePickerNavBar