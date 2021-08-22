import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Content';
import './index.css';

const App = () => {
    return(
        <>
          <Index />
        </>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));
