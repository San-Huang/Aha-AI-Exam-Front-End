import { FC, useState } from 'react';
import DateControls from './DateControls';
import DateTable from './DateTable';
import { MonthYear, nextMonth, prevMonth, currentMonthYear } from '../DateGetter';

type Props = {
    switchMode: () => void
    monthView: MonthYear
    onMonthViewChange: (monthView: MonthYear) => void
    onSelect?: (date: Date) => void
    selected?: Date
}

const DatePanel: FC<Props> = ({ switchMode, monthView, onMonthViewChange, onSelect = () => {}, selected }) =>{

    const [currentMonthView, setCurrentMonthView] = useState(monthView)

    const onNext = () => {
        const nextMonthYear = nextMonth(currentMonthView)
        setCurrentMonthView(nextMonthYear)
        onMonthViewChange(nextMonthYear)
    }

    const onPrev = () => {
        const prevMonthYear = prevMonth(currentMonthView)
        setCurrentMonthView(prevMonthYear)
        onMonthViewChange(prevMonthYear)
    }

    const selectDate = (value: Date) => {
        const monthYear = currentMonthYear(value)
        setCurrentMonthView(monthYear)
        onMonthViewChange(monthYear)
        onSelect(value)
    }

    return (
        <div>
            <DateControls 
                titleClick={switchMode} 
                onNext={onNext} 
                onPrev={onPrev} 
                monthView={currentMonthView}
            />
            <DateTable 
                monthView={currentMonthView} 
                selected={selected} 
                onSelect={selectDate}
            />
        </div>
    )
}

export default DatePanel;