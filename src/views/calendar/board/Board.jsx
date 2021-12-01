import React, { useState } from 'react';
import Moment from 'moment';

import './board.scss';
import Slot from '../slot/Slot';
import MonthlySlot from '../slot/MonthlySlot';


const Board = ({ showWeek }) => {

    const [activeDate, setActiveDate] = useState(new Date());
    const monthDays = [
        {
            dayNumber : Moment(new Date(`${Moment().month()}-1-${Moment().year()}`)).format('D'),
            currentMonth: Moment(new Date(`${Moment().month()}-1-${Moment().year()}`)).format('MM') === Moment().month().toString(),
            slot: {
                booked: false,
                members: null,
                selected: false,
                matchDriverOrPhlebotomist: false,
                matchDriverAndPhlebotomist: false,
            }
        }
    ];
    const d = Moment(new Date(`${Moment().month()}-1-${Moment().year()}`))
    for(let i = 0; i < 34; i++){
        let _slot = {
            booked: false,
            members: null,
            selected: false,
            matchDriverOrPhlebotomist: false,
            matchDriverAndPhlebotomist: false,
        }
        if(i == 1){
            _slot = {
                booked: false,
                members: {
                    driver: {
                        name: "გიორგი",
                        lastname: "გიორგაძე"
                    },
                    phlebotomists: [
                        {
                            name: "დავით",
                            lastname: "დავითაძე"
                        },
                        {
                            name: "ლევან",
                            lastname: "გაფრინდაშვილი"
                        }
                    ]
                },
                selected: false,
                matchDriverOrPhlebotomist: false,
                matchDriverAndPhlebotomist: false,
            }
        }


        monthDays.push({
            dayNumber : d.add(1, 'days').format('D'),
            currentMonth: d.format('MM') === Moment().month().toString(),
            slot: _slot
        })
    }


    const currentWeekDay = Moment().day()
    const diff = 7 - currentWeekDay
    const weekEnd = Moment(new Date()).add(diff, 'days')
    const days = [weekEnd.format('D/MM/YYYY')]
    const hours = []
    var config = {
        nextSlot: 30,
        startTime: '9:00',
        endTime: '24:00'
    };
    
    let slotTime = Moment(config.startTime, "HH:mm");
    let endTime = Moment(config.endTime, "HH:mm");
    
    while (slotTime < endTime)
    {
        hours.push(slotTime.format("HH:mm"));
        slotTime = slotTime.add(config.nextSlot, 'minutes');
    }

    for(let i = 0; i < 6; i++){
        days.push(weekEnd.add(-1, 'days').format('D/MM/YYYY'))
    }

    const slots = []
    const x = days.length;
    const y = hours.length;

    for(let i = 0; i < x; i++){
        slots.push([])
        for(let j = 0; j < y; j++){

            if(i == 0 && j == 0){
                slots[i].push({
                    booked: false,
                    members: {
                        driver: {
                            name: "გიორგი",
                            lastname: "გიორგაძე"
                        },
                        phlebotomists: [
                            {
                                name: "დავით",
                                lastname: "დავითაძე"
                            },
                            {
                                name: "ლევან",
                                lastname: "გაფრინდაშვილი"
                            }
                        ]
                    },
                    selected: false,
                    matchDriverOrPhlebotomist: false,
                    matchDriverAndPhlebotomist: false,
                })
            }else{
                slots[i].push({
                    booked: false,
                    members: null,
                    selected: false,
                    matchDriverOrPhlebotomist: false,
                    matchDriverAndPhlebotomist: false,
                })
            }
        }
    }


    const drawSlot = (data, index) => {
        return (
            <div className="slotWrapper" key={index}>
                {
                    data.map((x, i) => (
                        <Slot data={x} columnIndex={index} index={i} />     
                    ))
                }                           
            </div>
        )
    }


    return (
        
        <div className="boardWrapper">
            { showWeek ? (
                <>
                    <div className="weekHeader">
                        <div className="weekHeaderItem empty"></div> 
                        {
                            days.reverse().map((item, index) => (
                                <div key={index} className="weekHeaderItem">
                                    <span>{ item }</span>
                                </div>
                            ))
                        }

                    </div>
                    <div className="weekBody">
                        <div className="boardHours">
                            {
                                hours.map((item, index) => (
                                    <div key={index} className="hoursSlot">
                                        <span>{ item }</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="boardSlots">
                            {
                                slots.map((item, index) => (
                                    drawSlot(item, index)   
                                ))
                            }
                        </div>
                    </div>
                </>
            ) : (
                <div className="monthlyBoardSlots">
                    {
                        monthDays.map((item, index) => (
                            <MonthlySlot slots={slots} data={item} key={index} />     
                        ))
                    }
                </div>
            )}

        </div>
    )
}

export default Board;