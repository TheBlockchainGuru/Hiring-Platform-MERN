import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/routes';
import './App.css';
// import './assets/css/theme-overrides.css';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={Routes}></RouterProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
