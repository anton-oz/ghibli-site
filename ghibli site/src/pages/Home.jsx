

export default function Home() {

    const message = "Welcome";
    const splitMessage = [];

    for (let i = 0; i < message.length; i++) {
        splitMessage.push(
            <li className="hidden" key={i}>{message[i]}</li>
        )
    }
      
    return (
        <>
        <section className="hidden">
            <ul className="split">
                {splitMessage}
            </ul>
        </section>
        <section className="hidden">
            <h1>To</h1>    
        </section>
        </>
    )
}