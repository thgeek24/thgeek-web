import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                <h2>Welcome to My Full-Stack Website</h2>
                <p>This is the beginning of my journey to become a full-stack engineer.</p>
                <Button text="Click me!" onClick={handleClick}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;