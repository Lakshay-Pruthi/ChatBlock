import { useState, useEffect } from 'react';

import Web3 from 'web3'

import app from './contracts/App.json'

import './App.css'

function App() {

  const provider = window.ethereum;
  const [web3, setWeb3] = useState(null);
  const [userAccount, setUserAccount] = useState(null);
  const [contract, setContract] = useState(null);


  if (provider) {
    useEffect(() => {
      function loadWeb3() {
        setWeb3(new Web3(provider));
        ethereum.request({ method: 'eth_requestAccounts' });
      }



      provider && loadWeb3();
    }, [provider]);
  }

  useEffect(() => {
    async function loadUserAccount() {
      const accounts = await web3.eth.getAccounts();
      setUserAccount(accounts[0]);
    }

    function loadAppContract() {
      const cont = new web3.eth.Contract(app.abi, '0x4b2892aBFA55aDfD8053F5Dd539Fb23E5CD6Bc1B');
      setContract(cont);
    }
    web3 && loadUserAccount() && loadAppContract();
  }, [web3])

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
