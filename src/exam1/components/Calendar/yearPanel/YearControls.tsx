import { FC } from 'react'
import { prevButton, nextButton } from '../../../../assets/icon'
import {  currentYear } from '../DateGetter'
import './YearControls.css'

type Props = {
    onPrev: () => void
    onNext: () => void
}

const YearControls: FC<Props> = ({ onPrev, onNext }) => {

    return (
        <div className='control'>
            <div className='button-container'>
                <span className='control-button' onClick={onPrev}>
                    {prevButton}
                </span>
            </div>
                <p className='year-view'>
                    {currentYear}
                </p>
            <div className='button-container'>
                <span className='control-button' onClick={onNext}>
                    {nextButton}
                </span> 
            </div>
        </div>
    )
}

export default YearControls