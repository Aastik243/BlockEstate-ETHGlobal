import React, { useState } from 'react'
import { useAuth } from "../../context/AuthContext";
import "./ConnectWallet.css";
const ConnectWallet = () => {
    const { checkIfWalletConnected, currentAccount } = useAuth();
    const walletconnect = "Connect Wallet";

    return (
        <div className='connect-button'>
            <button onClick={checkIfWalletConnected} className="btn connect-button">{currentAccount ? currentAccount : walletconnect}</button>
        </div>
    )
}

export default ConnectWallet
