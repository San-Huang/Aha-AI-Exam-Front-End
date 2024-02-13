
import  React, {FC} from 'react'
import { currentMonthShortString, currentYear }  from './DateGetter'
import { Box } from '@mui/system'
import * as style from './CalendarStyle'

type Props = {
  title: string
}

const CalendarHeader: FC<Props> = ({ title }) => {

  return (
    <Box sx={style.calendarHeaderStyle}>
        <p style={style.titleStyle}>
            {title}
        </p>
        <p style={style.monYearStyle}>
          {`${currentMonthShortString}, ${currentYear}`}
      </p>
    </Box>
  )
}


export default CalendarHeader