import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dashboard from './views/Dashboard';
import Detail from './views/Detail';
import PostAd from './views/PostAd';

function App() {
const [screen,setScreen] = useState()

function updateScreen(screen){
    setScreen(screen)
}
    return (
        <div className="App">
            <header className="App-header">

                <Dashboard />
                
                
                <div style={{display:'flex'}}>
                <button onClick={() => updateScreen('detail')}>Detail</button>
                <button onClick={() => updateScreen('postad')}>PostAd</button>
                </div>

                {screen === 'detail' && <Detail/>}
                {screen === 'postad' && <PostAd/>}

            </header>
        </div>
    );
}

export default App;
