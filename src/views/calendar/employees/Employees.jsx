import React, { useState } from 'react';
import Select from 'react-select';

import './employees.scss'
import '../filters/filters.scss'

const Employees = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [showAll, setShowAll] = useState(true)

    const [options, setOptions] = useState([
        { value: 1, label: 'გიორგი გიორგაძე' },
        { value: 2, label: 'დავით დავითაძე' },
        { value: 3, label: 'ლევან გაფრინდაშვილი' },
    ]);

    const changeSelectHandler = (event) => {
        setSelectedOption(event)
    };

    const dummyData = [1, 2, 3, 4, 5]

    return (
        <div className="_wrapper">
            <div className="_wrapperHeader">
                <div className="_list">
                    <Select
                        name="brigada"
                        options={options}
                        defaultValue={selectedOption}
                        onChange={changeSelectHandler}
                        />
                </div>
                <div className="filterRangeView">
                    <div className={showAll ? 'active' : ''} onClick={() => setShowAll(true)}>
                        <span>
                            ყველა
                        </span>
                    </div>
                    <div className={!showAll ? 'active' : ''} onClick={() => setShowAll(false)}>
                        <span>
                            გრაფიკით
                        </span>
                    </div>
                </div>
            </div>
            <div className="_wrapperBody">
                <div className="driversList">
                    <div className="driverListHeader">
                        <span>მძღოლი</span>
                    </div>
                    { dummyData.map((x, i) => (
                        <div className="driverListItem">
                            <span>მძღოლი {x}</span>
                        </div>
                        ))
                    }
                    
                </div>
                <div className="driversList">
                    <div className="driverListHeader commentListHeader">
                        <span>კომენტარი</span>
                    </div>
                    { dummyData.map((x, i) => (
                        <div className="driverListItem commentListItem">
                            <span></span>
                        </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className="_wrapperBody">
                <div className="driversList">
                    <div className="driverListHeader">
                        <span>ფლებოტომისტი</span>
                    </div>
                    { dummyData.map((x, i) => (
                        <div className="driverListItem">
                            <span>ფლებო {x}</span>
                        </div>
                        ))
                    }
                    
                </div>
                <div className="driversList">
                    <div className="driverListHeader commentListHeader">
                        <span>კომენტარი</span>
                    </div>
                    { dummyData.map((x, i) => (
                        <div className="driverListItem commentListItem">
                            <span></span>
                        </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Employees;