import { FC,useState } from 'react'
//import { firstDayOfThisMonth, lastDateOfThisMonth, lastDateOfLastMonth } from '../DateGetter'
import './DateTable.css'
import { MonthYear } from '../DateGetter'

type Props = {
    monthView: MonthYear
    selected?: Date;
    onSelect?: (value: Date) => void;
}

const DateTable: FC<Props> = ({monthView,selected,onSelect = () => { }}) => {

    const [selectedDate, setSelectedDate] = useState(selected || new Date())

    const days: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    
    const isToday = (year: number, month: number, day: number): boolean => {
        const today = new Date();
        const date = new Date(year, month, day);
        return (
          today.getFullYear() === date.getFullYear() &&
          today.getMonth() === date.getMonth() &&
          today.getDate() === date.getDate()
        )
      }

      const isSelected = (year: number, month: number, day: number): boolean => {
        const date = new Date(year, month, day);
        return (
            selectedDate.getFullYear() === date.getFullYear() &&
            selectedDate.getMonth() === date.getMonth() &&
            selectedDate.getDate() === date.getDate()
        )
      }

      const selectDate = (year: number, month: number, day: number) => {
        const date = new Date(year, month, day);
        console.log(date)
        setSelectedDate(date);
        onSelect(date)
      };
      
      
      

    const firstDayOfThisMonth = new Date(monthView.year, monthView.month, 1).getDay()  //這個月的第一天是星期幾
    const lastDateOfThisMonth = new Date(monthView.year, monthView.month + 1, 0).getDate() //這個月有幾天
    const lastDateOfLastMonth = new Date(monthView.year, monthView.month, 0).getDate() //上個月有幾天
    
    const renderPreMonth = Array.from({ length: firstDayOfThisMonth }, (_, index) => (
        <div key={index}
             className='date-Pre-Next'
              >
            {lastDateOfLastMonth - firstDayOfThisMonth + index + 1}
        </div>))
        

    const renderThisMonth = Array.from({ length: lastDateOfThisMonth }, (_, index) => (
        <div key={index}
             onClick={() => monthView && selectDate(monthView.year, monthView.month, index + 1)} 
             className={`
                ${isToday(monthView.year, monthView.month, index + 1) ? 'date-today' : 'date'}
                ${isSelected(monthView.year, monthView.month, index + 1) ? 'date-selected' : 'date'}
                `}>
            {index + 1}
        </div>))

    const renderNextMonth = Array.from({ length: 42 - (firstDayOfThisMonth + lastDateOfThisMonth) }, (_, index) => (
        <div key={index}
             className='date-Pre-Next'>
            {index + 1}
        </div>))


    return(
        <div className='date-Table'>
            <div className="days">
                {days.map((day,index) => (<div  key={index} className="day">{day}</div>))}
            </div>
            <div className='dates'>
                {renderPreMonth}
                {renderThisMonth}
                {renderNextMonth}
            </div>
        </div>
    )
}

export default DateTable