
function ButtonInfo({icon}) {
    return (
        <a href='#'>
            <div className={icon==='plus' ? 'flex flex-row items-center justify-center w-20 h-20 bg-teal-600 rounded-md m-6 shadow-lg transition-all hover:bg-teal-400 hover:shadow-2xl shadow-teal-200' : 'hidden'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
            </div>
            <div className={icon==='send' ? 'flex flex-row items-center justify-center w-20 h-20 bg-teal-600 rounded-md m-6 shadow-lg transition-all hover:bg-teal-400 hover:shadow-2xl shadow-teal-200' : 'hidden'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg>
            </div>
        </a>
    )
}

export default ButtonInfo
