import Calendar from "../Calendar/Calendar"
import CalendarNavBar from "../NavBar/CalendarNavBar"
import { Typography } from '@mui/material'

const CalendarPage = () => {

    const passwordTitleStyle = {
        marginTop: '50px',
        color: 'white',
        fontFamily: 'Ubuntu',
        fontSize:'40px',
        fontWeight:'700',
        letterSpacing:'-1.5px',
      }

    return (
        <>
        <CalendarNavBar />
        <Typography sx={passwordTitleStyle}>
            Calendar
        </Typography>
        <Calendar title={'Text'}/>
        </>
    )
}


export default CalendarPage