import { useEffect, useState } from "react";
import Chat from "./Chat";

function Chatbox(props) {

    const { appContract, roomContract, userAccount } = props;

    const [roomName, setRoomName] = useState('Room')

    const [Members, setMembers] = useState(userAccount)







    useEffect(() => {
        async function loadName() {
            const name = await roomContract.methods.name().call();
            console.log(name);
            setRoomName(name);
        }
        roomContract && loadName();
    }, [roomContract])


    useEffect(() => {
        async function loadMembers() {
            const length = await roomContract.methods.getNumberOfMembers().call();
            const memb = [];
            for (let i = 0; i < length; i++) {
                const member = await roomContract.methods.members(i).call();
                memb.push(<li>{member}</li>)
            }
            setMembers(memb);
        }
        roomContract && loadMembers();
    }, [roomContract])

    async function addMemberToRoom(e) {
        e.preventDefault();
        const address = e.target[0].value;

        roomContract.methods.addMember(address).send({ from: userAccount, gas: 200000 })

        console.log(appContract);
        appContract.methods.addUserRoom(address, roomContract._address).send({ from: userAccount, gas: 200000 })
    }

    async function SendMessage(e) {
        e.preventDefault();
        const message = e.target[0].value;
        roomContract.methods.sendMessage(userAccount, message).send({ from: userAccount });

    }
    return (
        <>
            <header>
                {roomName}
                <div>
                    <ul>Members
                        <li>{userAccount}</li>
                        {Members}
                    </ul>
                    <form onSubmit={addMemberToRoom} id="header-form">
                        <input type="text" />
                        <button> + Add member</button>
                    </form>
                </div>
            </header>
            <div className='chatBody'>

                <div className="message-outer-left"><div className='message-left'><p>Sandesha Bot</p>Welcome! Before sending messages or adding members to this group please note :<br /> 1. Once a meber added can't be removed <br />2. Once a message sent can't be edited or deleted.</div></div>
                <Chat roomContract={roomContract} userAccount={userAccount} />
            </div>
            <form onSubmit={SendMessage} id='message-form'>
                <input type="text" placeholder='your message here....' />
                <button className='primaryBtnDesign'>upload image</button>
                <button className='primaryBtnDesign' type='submit'>send</button>
            </form>
        </>
    )
}

export default Chatbox;