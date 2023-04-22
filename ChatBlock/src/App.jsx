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
  }

  useEffect(() => {
    async function loadUserAccount() {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      setUserAccount(accounts[0]);
    }

    async function loadAppContract() {
      const cont = new web3.eth.Contract(app.abi, '0x580bb68181B38768FF0EE793E8Bc0542C7691A36');
      setContract(cont);
    }
    web3 && loadUserAccount() && loadAppContract();
  }, [web3])

  async function something() {
    const transaction = await contract.methods.createRoom(userAccount, "second Room").send({ from: userAccount });
    console.log(transaction);
  }

  async function loadRoomContractAddress() {
    const address = await contract.methods.userRooms(userAccount, 0).call();
    setRoomContract(address);
  }

  async function loadRoomContract() {
    const cont = new web3.eth.Contract(room.abi, roomContract);
    console.log(cont);
    const name = await cont.methods.name().call();
    console.log(name);
  }

  ethereum.on("accountsChanged", () => {
    setUserAccount();
  });

  ethereum.on('chainChanged', (_chainId) => window.location.reload());


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route index element={<Home />} />
            <Route path='/Rooms' element={<Rooms />} />
            <Route path='/About' element={<About />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
