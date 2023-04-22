import logo from '../assets/Logo2.jpg'

function Rooms() {
    function something() {
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
                        <li onClick={something}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        <li onClick={something}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        <li onClick={something}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        <li onClick={something}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        <li onClick={something}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        <li onClick={something}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        <li onClick={something}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>
                        <li onClick={something}><p className='roomname'>Hello</p><p className='roomAddress'>Address 54f56s4df654sd64df67s6</p></li>


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
                    <div>Chat body</div>
                    <div>
                        <input type="text" />
                        <button className='primaryBtnDesign'>send</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rooms;