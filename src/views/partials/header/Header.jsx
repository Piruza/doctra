import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'

const Header = ({ tab }) => {

    const redirectTo = tab => {
        return <Link to={tab} />
    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src="/assets/images/Logo.png" alt="" />
                </div>
            </header>
            <div className="tabWrapper">
                <Link to="/" className={tab == 1 ? 'active tab' : 'tab'}>
                    <p >ჩაწერები</p>
                </Link>
                <div className={tab == 2 ? 'active tab' : 'tab'}>
                    <p>წინასწარი კალკულაცია</p>
                </div>
                <div className={tab == 3 ? 'active tab' : 'tab'}>
                    <p>სამედიცინო მიღებები</p>
                </div>
                <div className={tab == 4 ? 'active tab' : 'tab'}>
                    <p>ფორმა 100</p>
                </div>
                <Link to="/calendar" className={tab == 5 ? 'active tab' : 'tab'} >
                    <p>ბრიგადები</p>
                </Link>
            </div>
        </>
    )
}

export default Header;