import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Web3 from 'web3'

import app from './contracts/App.json'

import room from './contracts/Room.json'

import './App.css'
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import About from './Pages/About';
import Main from './Pages/Main';

function App() {

  const provider = window.ethereum;
  const [web3, setWeb3] = useState(null);
  const [userAccount, setUserAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [roomContract, setRoomContract] = useState(null);


  if (provider) {
    useEffect(() => {
      function loadWeb3() {
        setWeb3(new Web3(provider));
        ethereum.request({ method: 'eth_requestAccounts' });
      }



      provider && loadWeb3();
    }, [provider]);


    useEffect(() => {
      async function loadUserAccount() {
        const accounts = await web3.eth.getAccounts();
        setUserAccount(accounts[0]);
      }

      web3 && loadUserAccount();
    }, [provider, web3, userAccount])

    useEffect(() => {
      async function loadAppContract() {
        const cont = new web3.eth.Contract(app.abi, '0x13C195537205c4E56e3c8d4478735799A37954f2');
        setContract(cont);
      }
      web3 && loadAppContract();
    }, [web3])


    ethereum.on("accountsChanged", () => {
      setUserAccount();
      window.location.reload()
    });

    ethereum.on('chainChanged', (_chainId) => window.location.reload());

  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Sandesha/' element={<Main userAccount={userAccount} />} >
            <Route index element={<Home web3={web3} contract={contract} userAccount={userAccount} provider={provider} />} />
            <Route path='Rooms' element={<Rooms web3={web3} contract={contract} userAccount={userAccount} />} />
            <Route path='About' element={<About />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
