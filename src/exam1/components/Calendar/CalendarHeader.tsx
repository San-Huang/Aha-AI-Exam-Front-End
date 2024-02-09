
import  React, {FC} from 'react'
import { currentMonthShortString, currentYear }  from './DateGetter'

type Props = {
  title: string
}

 const CalendarHeader: FC<Props> = ({title}) => {

  

  return (
    <div style={{
            height: '72px',
            width: '156px',
            color:'white',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            textAlign: 'left',
            padding: '17px 0 11px 24px'
    }}>
      <p style={{
            height: '24px',
            color:'white',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '150%',
            margin: '0'
      }}>
          {title}
      </p>
      <p style={{
            height: '44px',
            color:'white',
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '137.5%',
            margin: '0',
            paddingTop: '4px'
      }}>
          {`${currentMonthShortString},  ${currentYear}`}
      </p>
    </div>
  )
}


export default CalendarHeader