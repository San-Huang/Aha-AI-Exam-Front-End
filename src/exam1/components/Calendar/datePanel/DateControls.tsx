import { FC } from 'react';
import { prevButton, nextButton } from '../../../../assets/icon';
import { MonthYear } from '../DateGetter';
import './DateControls.css';

type Props = {
    monthView: MonthYear
    titleClick: () => void
    onPrev: () => void
    onNext: () => void
}

const DateControls: FC<Props> = ({ monthView, titleClick, onPrev, onNext }) => {

    const currentMonthYear = new Date(monthView.year, monthView.month, 1)
                             .toLocaleString('en-US', { month: 'long', year: 'numeric'})

    return (
        <div className='control'>
            <div className='button-container'>
                <span className='control-button' onClick={onPrev}>
                    {prevButton}
                </span>
            </div>
                <span className='month-year' onClick={titleClick}>
                    {currentMonthYear}
                </span>
            <div className='button-container'>
                <span className='control-button' onClick={onNext}>
                    {nextButton}
                </span> 
            </div>
        </div>
    )

}

export default DateControls;