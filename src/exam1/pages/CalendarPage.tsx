import Calendar from "../components/Calendar/Calendar";
import CalendarNavBar from "../components/NavBar/CalendarNavBar";
import { Typography } from '@mui/material';
import * as style from './pageStyle';

const CalendarPage = () => {

    return (
        <div>
            <CalendarNavBar />
            <Typography sx={style.passwordTitleStyle}>
                Calendar
            </Typography>
            <Calendar title={'Text'}/>
        </div>
    )
}

export default CalendarPage;