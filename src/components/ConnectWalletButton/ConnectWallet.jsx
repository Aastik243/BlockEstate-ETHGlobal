import React, { useState } from 'react'
import { useAuth } from "../../context/AuthContext";
const ConnectWallet = () => {
    const { checkIfWalletConnected, currentAccount} = useAuth();
    const walletconnect="Connect Wallet";

    return (
        <div className='connect-button'>
            <button onClick={checkIfWalletConnected} className="btn btn-primary">{currentAccount ? currentAccount : walletconnect}</button>
        </div>
    )
}

export default ConnectWallet
