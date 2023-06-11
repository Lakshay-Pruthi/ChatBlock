import Form from "../Components/Form";
import logo from '../assets/Logo2.jpg'


<<<<<<< HEAD
function Home() {
=======
function Home(props) {
    const { web3, contract, userAccount, provider } = props;


>>>>>>> 960238eb0f1200269b6cc74dc74fa4eed5fc3052
    return (
        <>
            <div className="container">
                <div id="left">
                    <img src={logo} alt="" />
                    <h1>Sandesha</h1>
                    <p>- Decentralized chat platform</p>
                    <h2>Welcome</h2>
                </div>
<<<<<<< HEAD
                <Form />
=======
                <Form web3={web3} contract={contract} userAccount={userAccount} provider={provider} />
>>>>>>> 960238eb0f1200269b6cc74dc74fa4eed5fc3052

            </div>
        </>
    )
}

export default Home;