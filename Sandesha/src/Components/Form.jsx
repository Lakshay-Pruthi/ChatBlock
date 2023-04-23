
function Form(props) {
    const { contract, userAccount } = props;
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
                <button type="submit" className="primaryBtnDesign">Create Room</button>
            </form>
        </>
    )
}

export default Form;