import { useState, useEffect } from 'react';

import Web3 from 'web3'

import './App.css'

function App() {

  const provider = window.ethereum;
  const [web3, setWeb3] = useState(null);
  const [userAccount, setUserAccount] = useState(null);

  if (provider) {
    useEffect(() => {
      function loadWeb3() {
        setWeb3(new Web3(provider));
        ethereum.request({ method: 'eth_requestAccounts' });
      }

      provider && loadWeb3();
    }, [provider]);
  }

  return (
    <>

    </>
  )
}

export default App
