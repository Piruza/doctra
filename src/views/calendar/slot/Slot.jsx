import React, {useState, useEffect} from 'react';

const Slot = ({ data, index, columnIndex }) => {

    const [slot, setSlot] = useState(data)
    const [selected, setSelected] = useState(data.selected)

    const onSlotClick = () => {

        setSelected(!selected)
        data.selected = !selected
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

    return (
        <div key={index} className="boardSlot" onClick={onSlotClick}>
            { selected && (
                <div className="slotStatus" style={style.selected} ></div>
            )}
            { slot.matchDriverOrPhlebotomist && (
                <div className="slotStatus" style={style.matchDriverOrPhlebotomist} ></div>
            )}
            { slot.matchDriverAndPhlebotomist && (
                <div className="slotStatus" style={style.matchDriverAndPhlebotomist} ></div>
            )}
  
            { slot.members && slot.members.driver && (
                <span className="driver">{ slot.members.driver.name } {slot.members.driver.lastname}</span>
            ) }
            { slot.members && slot.members.phlebotomists &&  slot.members.phlebotomists.length > 0 && (   
                drawPhlebos(slot.members.phlebotomists)             
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
    }
}

export default Slot;




