import React, { useState } from 'react'
import { useAuth } from "../../context/AuthContext";
const ConnectWallet = () => {
    const { checkIfWalletConnected, currentAccount } = useAuth();

    return (
        <div className='connect-button'>
            <button onClick={checkIfWalletConnected} className="btn btn-primary">Connect Wallet</button>
        </div>
    )
}

export default ConnectWallet
