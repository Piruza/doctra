import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import Moment from 'moment';

import 'react-calendar/dist/Calendar.css';
import './filters.scss';

const Filters = ({ onBoardChange }) => {
    
    const [showCalendar, setShowCalendar] = useState(false)
    const [showWeek, setShowWeek] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null)
    const [options, setOptions] = useState([
        { value: 1, label: 'ბირგადა 1' },
        { value: 2, label: 'ბრიგადა 2' },
        { value: 3, label: 'ბრიგადა 3' },
    ]);
    const [activeDate, setActiveDate] = useState(new Date());

    useEffect(() => {
        onBoardChange(showWeek)
    }, [showWeek])

    const changeSelectHandler = (event) => {
        setSelectedOption(event)
    };

    const onCalendarSelect = (value) => {
        setShowCalendar(false);
        setActiveDate(value)
    }

    const onDatePrevClick = () => {
        const newDate = Moment(activeDate).add(-1, 'days')

        setActiveDate(newDate)
    }

    const onDateNextClick = () => {
        const newDate = Moment(activeDate).add(1, 'days')

        setActiveDate(newDate)
    }

    const onSelectClick = () => {}
    const onClearClick = () => {}
    const onCancelClick = () => {}

    return (
        <div className="filterWrapper">
            <div className="filterSelection">
                <div style={{ width: '250px', fontWeight: 'bold'}}>
                    <Select
                        name="brigada"
                        options={options}
                        defaultValue={selectedOption}
                        onChange={changeSelectHandler}
                        />
                </div>
                
                <p>
                    კომენტარი: 
                    <span> ვარკეთილი/გლდანი , რთული ვენები</span>
                </p>
            </div>
            <div className="filterDates">
                <p>თარიღი</p>
                <div className="dateBtn dateBtnPrev" onClick={onDatePrevClick}>
                    <img src="/assets/images/arrow.png" alt="" />
                </div>
                <div className="dateInput">
                    <input type="text" value={Moment(activeDate).format('D-MM-YYYY')} id="showCalendar" className={ showCalendar ? "hidden" : '' } readOnly={true} onClick={() => setShowCalendar(true)} />
                    { showCalendar && (
                        <Calendar
                        onChange={onCalendarSelect}
                        value={activeDate}
                        className="calendar"
                        />
                    )}
                </div>
                <div className="dateBtn dateBtnNext" onClick={onDateNextClick}>
                    <img src="/assets/images/arrow.png" alt="" />
                </div>

                <div className="filterRangeView">
                    <div className={showWeek ? 'active' : ''} onClick={() => setShowWeek(true)}>
                        <span>
                            კვირა
                        </span>
                    </div>
                    <div className={!showWeek ? 'active' : ''} onClick={() => setShowWeek(false)}>
                        <span>
                            თვე
                        </span>
                    </div>
                </div>
            </div>
            <div className="filterButtons">
                <div className="do">
                    <div className="undo">
                        <img src="/assets/images/undo.png" alt="" />
                    </div>
                    <div className="redo">
                        <img src="/assets/images/redo.png" alt="" />
                    </div>
                </div>
                <div className="filterActionButtons">
                    <div className="_btn btnSelect" onClick={onSelectClick}>
                        <span>დანიშვნა</span>
                    </div>
                    <div className="_btn btnCancel" onClick={onCancelClick}>
                        <span>გაუქმება</span>
                    </div>
                    <div className="_btn btnClear" onClick={onClearClick}>
                        <span>გასუფთავება</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filters;