import AccountFromTo from "../components/AccountFromTo"
import ActionButton from "../components/ActionButton"
import InputAmount from "../components/InputAmount"
import Navbar from "../components/Navbar"

function Topup() {
    return (
        <>
            <Navbar activeTabNow='Topup'/>
            <div className="flex justify-center align-middle flex-col m-auto">
                <h1 className="text-black font-bold ml-96 mt-10">Topup</h1>
                <div className="bg-white shadow-lg rounded-3xl flex justify-center align-middle flex-col ml-96 mr-96 mt-4 p-10">
                    <InputAmount/>
                    <AccountFromTo/>
                    <div className="flex flex-col bg-slate-50 px-10 rounded-3xl mt-5 mb-16">
                        <div className="bg-slate-50 rounded-3xl flex justify-start align-middle flex-row">
                            <p className="flex align-middle justify-center text-black py-7 text-2xl">Notes: </p>
                            <input type="text" className="bg-slate-50 w-full h-12 rounded-md m-5 text-2xl text-black border-none focus:outline-none" placeholder="Untuk beli mobil" />
                        </div>
                    </div>
                    <ActionButton onClick={console.log("click")}>
                        Transfer
                    </ActionButton>
                </div>
            </div>
        </>
    )
}

export default Topup