import { FC } from 'react';
import './YearTable.css';
import { yearStartFrom } from '../DateGetter';

type Props = {
    currentYear:number
    onSelect:(value: number) => void
    selected: number
}

const YearTable: FC<Props> = ({ currentYear, onSelect, selected }) => {

    const isSelected = (year: number) => {
        return year === selected;
      }

      const renderYears = Array.from({ length: 20 }, (_, index) => (
        <div 
            className={`${isSelected(yearStartFrom(currentYear) + index) 
                        ? 'year-select' 
                        : 'year'}`
                      }
            key={index}
            onClick={() => onSelect(yearStartFrom(currentYear) + index)} 
        >
            {yearStartFrom(currentYear) + index}
        </div>
      ))

    return(
        <div className="years-table">
            {renderYears}
        </div>
    )
}

export default YearTable