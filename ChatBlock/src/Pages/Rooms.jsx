import { useEffect, useState } from 'react';
import logo from '../assets/Logo2.jpg'
import room from '../contracts/Room.json'

function Rooms(props) {

    const { web3, contract, userAccount } = props;


    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        async function loadRooms() {
            const length = await contract.methods.getNumberOfRooms(userAccount).call();
            const roooms = [];
            for (let i = 0; i < length; i++) {
                const address = await contract.methods.userRooms(userAccount, i).call();
                const name = await loadContractName(address);
                roooms.push(<li onClick={displayChat}><p className='roomname'>{name}</p><p className='roomAddress'>{address}</p></li>)
            }
            setRooms(roooms);
        }
        userAccount && loadRooms();
    }, [userAccount, contract])

    async function loadContractName(address) {
        const cont = new web3.eth.Contract(room.abi, address);
        const name = await cont.methods.name().call();
        console.log(name);
        return name;
    }

    function displayChat() {
        const box = document.getElementById('chat')
        console.log(box);
        box.style.display = 'none';
        const box2 = document.getElementById('chatBox')
        console.log(box2);
        box2.style.display = 'flex'
    }
    return (
        <>
            <div className="Rooms-outer">
                <div className="rooms">
                    <ul>
                        <li id='chatHeading'><h3>Chats</h3></li>
                        <li onClick={displayChat}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        {rooms}

                    </ul>
                </div>
                <div id="chat">
                    <div id="left">
                        <img src={logo} alt="" />
                        <h1>Welcome</h1>
                        <p>Sandesha == Decentralized == Privacy</p>
                        <p>Start messaging...</p>
                    </div>
                </div>
                <div id='chatBox'>
                    <header>Room Name</header>
                    <div className='chatBody'>
                        <div className='message'><p>Name</p> Hello this is my message</div>
                    </div>
                    <div>
                        <input type="text" placeholder='your message here....' />
                        <button className='primaryBtnDesign'>upload image</button>
                        <button className='primaryBtnDesign'>send</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rooms;