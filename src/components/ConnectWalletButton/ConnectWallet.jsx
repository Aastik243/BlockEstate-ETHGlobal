<<<<<<< HEAD
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
=======
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
>>>>>>> 57ec83fdd9dd2a4e74887e10a54e4dde9b51e438
