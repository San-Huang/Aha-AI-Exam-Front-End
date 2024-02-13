import { Paper, MenuList, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import * as style from './NavBarStyle';

const DatePickerNavBar = () => {

return (
    <div>
         <Paper sx={style.navPaperStyle}>
            <MenuList sx={style.menuListStyle}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <MenuItem sx={style.homeIconStyle} disableRipple>
                            <HomeRoundedIcon />
                            <span>Home</span>
                    </MenuItem>
                </Link>
                <Link to='/exam1/password' style={{ textDecoration: 'none' }}>
                    <MenuItem sx={style.nonFocusIconStyle} disableRipple>
                            <PasswordRoundedIcon />
                            <span>Password</span>
                    </MenuItem>
                </Link>
                <Link to='/exam1/calendar' style={{ textDecoration: 'none' }}>
                    <MenuItem  sx={style.nonFocusIconStyle} disableRipple>
                        <CalendarTodayRoundedIcon />
                        <span>Calendar</span>
                    </MenuItem>
                </Link>
                <Link to='/exam1/datePicker' style={{ textDecoration: 'none' }}>
                    <MenuItem  sx={style.focusIconStyle} disableRipple>
                        <CalendarMonthRoundedIcon />
                        <span>Date Picker</span>
                    </MenuItem>
                </Link>
            </MenuList>
        </Paper>
    </div>
    )
}

export default DatePickerNavBar;