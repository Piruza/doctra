import React, {useState, useEffect} from 'react';

const MonthlySlot = ({ data, index }) => {

    const [slot, setSlot] = useState(data)
    const [selected, setSelected] = useState(data.selected)

    const onSlotClick = () => {

        setSelected(!selected)
        data.slot.selected = !selected
    }

    useEffect(() => {
        setSlot(data)

    }, [selected])

    const drawPhlebos = (items) => {
        return (
            items.map((x, i) => (
                <span className="phlebo">{ x.name } {x.lastname}</span>
            ))
        )
    }

    console.log(data)

    return (
        <div key={index} className="MonthlyBoardSlot" style={ !data.currentMonth ? style.nextMonth : null  } onClick={onSlotClick}>
            <p className="monthDayNumber" style={style.p}>{ data.dayNumber }</p>
            { selected && (
                <div className="slotStatus" style={style.selected} ></div>
            )}
            { data.slot.matchDriverOrPhlebotomist && (
                <div className="slotStatus" style={style.matchDriverOrPhlebotomist} ></div>
            )}
            { data.slot.matchDriverAndPhlebotomist && (
                <div className="slotStatus" style={style.matchDriverAndPhlebotomist} ></div>
            )}
  
            { data.slot.members && data.slot.members.driver && (
                <span className="driver">{ data.slot.members.driver.name } {data.slot.members.driver.lastname}</span>
            ) }
            { data.slot.members && data.slot.members.phlebotomists &&  data.slot.members.phlebotomists.length > 0 && (   
                drawPhlebos(data.slot.members.phlebotomists)             
            ) }
        </div>
    )
}

const style = {
    selected : {
        backgroundColor: 'rgba(7, 200, 193, .3)',
        boxShadow: 'inset 0 0 0 5px #07C8C1'
    },
    matchDriverOrPhlebotomist: {
        boxShadow: 'inset 0 0 0 5px #2A5369'
    },
    matchDriverAndPhlebotomist: {
        boxShadow: 'inset 0 0 0 4px #2A5369, inset 0 0 0 8px #0997AE'
    },
    p:{
        margin: '2px 8px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0, .7)'
    },
    nextMonth: {
        backgroundColor: '#E4E4E4'
    }
}

export default MonthlySlot;




