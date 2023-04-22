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

      async function loadUserAccount() {
        const accounts = await web3.eth.getAccounts();
        setUserAccount(accounts[0]);
      }

      provider && loadWeb3() || loadUserAccount();
    }, [provider]);
  }

  ethereum.on("accountsChanged", () => {
    setUserAccount();
  });

  ethereum.on('chainChanged', (_chainId) => window.location.reload());


  return (
    <>
      {userAccount}
    </>
  )
}

export default App
