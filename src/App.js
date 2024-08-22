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
                <h2>Welcome to THGeek@COM</h2>
                <p>A place where function meets fascination.</p>
                <Button text="Click me!" onClick={handleClick}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;