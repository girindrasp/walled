function AccountNo() {
    return (
        <div className='flex p-14 items-center w-72 h-48 bg-teal-600 rounded-xl shadow-2xl m-10'>
            <div className='flex flex-col'>
                <p className='text-opacity-50 text-xl leading-loose text-white'>Account No.</p>
                <p className='text-3xl text-white font-bold'>{JSON.parse(localStorage.getItem("user")).id}</p>
            </div>
        </div>
    )
}

export default AccountNo