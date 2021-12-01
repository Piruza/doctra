import React, { useState } from 'react';
import Header from '../partials/header/Header';
import Board from './board/Board';
import Employees from './employees/Employees';
import Filters from './filters/Filters';

const Calendar = () => {

    const [showWeek, setShowWeek] = useState(true)
    
    const onBoardTypeChange = (value) => {
        setShowWeek(value)
    }

    return (
        <>
            <Header tab={5} />
                        
            <Filters onBoardChange={onBoardTypeChange} />
            
            <div className="calendar-wrapper" style={{ display: 'flex' }}>
                <Board showWeek={showWeek} />

                <Employees />
            </div>
        </>
    )
}

export default Calendar;