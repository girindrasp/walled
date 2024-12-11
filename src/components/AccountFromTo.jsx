function AccountFromTo({isTransfer}) {
    if (isTransfer) {
        return (
            <div className="bg-slate-50 rounded-3xl flex justify-start align-middle flex-row">
                <div className="bg-slate-200 rounded-3xl px-10">
                    <p className="flex align-middle justify-center text-black py-5 text-2xl font-bold">To: </p>
                </div>
                <select id="countries" className="m-5 bg-slate-50 text-gray-900 text-lg rounded-lg focus:outline-none block w-full">
                    <option value="C">900782139 (Giz)</option>
                    <option value="D">729100694 (Fakhri)</option>
                </select>
            </div>
        )
    }
    return (
        <div className="bg-slate-50 rounded-3xl flex justify-start align-middle flex-row">
            <div className="bg-slate-200 rounded-3xl px-10">
                <p className="flex align-middle justify-center text-black py-5 text-2xl font-bold">From </p>
            </div>
            <select id="countries" className="m-5 bg-slate-50 text-gray-900 text-lg rounded-lg focus:outline-none block w-full">
                <option value="C">Credit Card</option>
                <option value="D">Debit Card</option>
            </select>
        </div>
    )
}

export default AccountFromTo