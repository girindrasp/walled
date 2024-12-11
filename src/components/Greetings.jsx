function Greeting({name}) {
    const date = new Date();
    let time = date.getHours();
    let greet;
    if (time < 12) {
        greet = "Morning"
    } else if (time < 17) {
        greet = "Afternoon"
    } else if (time < 21) {
        greet = "Evening"
    } else {
        greet = "Night"
    }
    return (
        <div className="p-10 flex flex-col">
            <p className='text-7xl font-bold text-black'>Good {greet}, {name}</p>
            <br/>
            <p className='text-2xl text-black'>Check all your incoming and outgoing transactions here</p>
        </div>
    )
}

export default Greeting