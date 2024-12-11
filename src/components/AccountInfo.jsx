function AccountInfo({name}) {
    return (
        <div className="flex flex-row justify-end items-center p-10">
            <div className='flex flex-col p-10'>
                <p className='text-xl font-bold text-black'>{name}</p>
                <p className='text-xl text-black'>Personal Account</p>
            </div>
            <img src={JSON.parse(localStorage.getItem("user"))?.avatar} className='rounded-full w-32 h-32 transition-all border-white border-4 hover:border-teal-600 hover:border-4'/>
        </div>
    )
}

export default AccountInfo