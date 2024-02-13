import React,{ FC, useState } from 'react';
import YearControls from './YearControls';
import YearTable from './YearTable';
import { currentYear } from '../DateGetter';

type Props = {
    onSelect:(value: number) => void;
    selected: number
 }

const YearPanel: FC<Props> = ({ onSelect, selected }) =>{
    
    const [currentYearView, setCurrentYearView] = useState(currentYear)

    const onNext = () => {
        setCurrentYearView(currentYearView + 20)
      }

    const onPrev = () => {
        setCurrentYearView(currentYearView - 20)
      }

    return (
        <div>
            <YearControls 
                onPrev={onPrev} 
                onNext={onNext} 
            />
            <YearTable 
                selected={selected} 
                currentYear={currentYearView} 
                onSelect={onSelect}
            />
        </div>
    )
}

export default YearPanel