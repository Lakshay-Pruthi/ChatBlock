import Form from "../Components/Form";
import logo from '../assets/Logo2.jpg'


function Home(props) {
    const { web3, contract, userAccount } = props;


    return (
        <>
            <div className="container">
                <div id="left">
                    <img src={logo} alt="" />
                    <h1>Sandesha</h1>
                    <p>- Decentralized chat platform</p>
                    <h2>Welcome</h2>
                </div>
                <Form web3={web3} contract={contract} userAccount={userAccount} />

            </div>
        </>
    )
}

export default Home;