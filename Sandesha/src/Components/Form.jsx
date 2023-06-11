import { useContext } from "react";
import { MainContext } from "../Pages/Main";

<<<<<<< HEAD
function Form() {
    const { contract, userAccount } = useContext(MainContext);
=======
function Form(props) {
    const { contract, userAccount, provider } = props;
>>>>>>> 960238eb0f1200269b6cc74dc74fa4eed5fc3052
    async function createRoom(e) {
        e.preventDefault();
        const name = e.target[0].value;
        const transaction = await contract.methods.createRoom(userAccount, name).send({ from: userAccount });
        console.log(transaction);
    }
    return (
        <>
            <form onSubmit={createRoom}>
                <input type="text" placeholder="Enter the name" />
                {provider ?
                    <button type="submit" className="primaryBtnDesign">Create Room</button>
                    :
                    <button disabled type="button" className="primaryBtnDesign">Metamask required</button>

                }
            </form>
        </>
    )
}

export default Form;