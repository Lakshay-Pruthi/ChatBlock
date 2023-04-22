import logo from '../assets/Logo2.jpg'

function Rooms() {
    return (
        <>
            <div className="Rooms-outer">
                <div className="rooms">
                    <ul>
                        <li><h3>Chats</h3></li>
                        <li><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        <li><p>Hello</p><p>Address 54f56s4df654sd64df67s6</p></li>
                        <li><p>Hello</p><p>Address 54f56s4df654sd64df67s6</p></li>
                        <li><p>Hello</p><p>Address 54f56s4df654sd64df67s6</p></li>
                        <li><p>Hello</p><p>Address 54f56s4df654sd64df67s6</p></li>
                    </ul>
                </div>
                <div className="chat">
                    <div id="left">
                        <img src={logo} alt="" />
                        <h1>Welcome!</h1>
                        <p>Sandesha == Decentralized == Privacy</p>
                        <p>Start messaging...</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rooms;