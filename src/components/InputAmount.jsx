function InputAmount() {
    return (
        <>
            <div className="flex flex-col bg-slate-50 p-8 rounded-3xl my-5">
                <p className="text-black font-bold text-xl mb-5">Amount</p>
                <div className="bg-slate-50 rounded-3xl flex justify-start align-middle flex-row">
                    <p className="flex align-middle justify-center text-black font-bold text-4xl py-1">IDR</p>
                    <input type="number" className="bg-slate-50 w-full h-full flex align-middle justify-center rounded-md ml-5 font-bold  text-4xl text-black border-none focus:outline-none" placeholder={'100,000'} />
                </div>
                <span className='transition-all h-0.5 mt-5 bg-black w-full'/>
            </div>
        </>
    )
}

export default InputAmount