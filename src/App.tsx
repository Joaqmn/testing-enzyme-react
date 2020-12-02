import React from 'react';
import { Login } from './pages/Login/Login';
import { DisplayProfile } from "./components/DisplayProfile/DisplayProfile"

function App() {
    return (
        <div>
            <DisplayProfile />
            <Login/>
        </div>
    );
}

export default App;
