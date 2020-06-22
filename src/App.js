import React from 'react';
import Form from './Form';
const App = () => {
    return(
        <main>
            <div className='flexContainer'>
                <section>
                    <h1>Learn to code by watching others</h1>
                    <p className = 'description'>  See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </section>
                <Form/>
            </div>
        </main>
    )
}

export default App;