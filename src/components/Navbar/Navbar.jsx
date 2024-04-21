import React, { useEffect } from 'react'
import './Navbar.css'
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ConnectWallet from '../ConnectWalletButton/ConnectWallet';

const Navbar = () => {

    const { checkIfWalletConnected, currentAccount } = useAuth();

    const navigate = useNavigate();
    return (
        <>
            <div className="navbar">
                <div className="navbar__container d-flex">
                    <div className="navbar__logo">
                        Navbar
                    </div>
                    <div className="navbar__menu d-flex">
                        <div className="nav-route-parent d-flex">
                            <a href="/Listpage"><div className='nav-route d-flex' onClick={navigate('/Listpage')}>List</div></a>
                            <a href="/about"><div className='nav-route d-flex'>Rent</div></a>
                            <a href="/Propertydashboard"><div className='nav-route d-flex' onClick={navigate('/PropertyDashboard')} >Dashboard</div></a>
                        </div>
                        <div className="navbar__button">
                            <ConnectWallet />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar

