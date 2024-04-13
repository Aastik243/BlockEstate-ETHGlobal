import React, { useEffect } from 'react'
import './Navbar.css'
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ConnectWallet from '../ConnectWalletButton/ConnectWallet';

const Navbar = () => {

    const { checkIfWalletConnected, currentAccount } = useAuth();


    return (
        <>
            <div className="navbar">
                <div className="navbar__container d-flex">
                    <div className="navbar__logo">
                        Navbar
                    </div>
                    <div className="navbar__menu d-flex">
                        <div className="nav-route-parent d-flex">
                            <a href="/"><div className='nav-route'>List</div></a>
                            <a href="/about"><div className='nav-route'>Rent</div></a>
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

