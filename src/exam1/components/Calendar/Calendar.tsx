import  React, { FC, useState } from 'react';
import CalendarHeader from './CalendarHeader';
import DateButton from './datePanel/DateButton';
import DatePanel from './datePanel/DatePanel' ;
import YearPanel from './yearPanel/YearPanel';
import { currentMonthYear } from './DateGetter';
import * as style from './CalendarStyle';

type Props = {
   date?: Date
   onChange?: (value: Date) => void;
   onCancel?: () => void;
   title?:any
 }

const Calendar: FC<Props> = ({ date, title, onChange = () => {}, onCancel = () => {} }) => {

   const [currentDate, setCurrentDate] = useState(date || new Date());
   const [currentMonthView, setCurrentMonthView] = useState(currentMonthYear(date || new Date()));
   const [mode, setMode] = useState('Date')

   const showYearPanel = () => {
      setMode('Year')
   }

   const selectYear = (year:number) => { 
      setCurrentMonthView({ year, month: currentMonthView.month });
      setMode('Date');
   }

   const selectDate = (date: Date) => {
      setCurrentDate(date);
   }

   const onOk = () => {
      onChange(currentDate);
   }

  return (
     <div
        style={style.calendarStyle}
     >
         <CalendarHeader title={title}/>

         { mode === 'Date' && 
            <DatePanel 
               selected={date} 
               onSelect={selectDate}  
               monthView={currentMonthView} 
               onMonthViewChange={setCurrentMonthView} 
               switchMode={showYearPanel}
            />
         }
         { mode === 'Year' && 
            <YearPanel 
               selected={currentMonthView.year}  
               onSelect={selectYear}
            />
         }

         <DateButton onOk={onOk} onCancel={onCancel} />
     </div>
  )
}

export default Calendar;