import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Impressum from './pages/impressum/Impressum';
import Datenschutz from './pages/datenschutz/Datenschutz';
import './App.css';
import 'animate.css';

function App() {
    const ascii = `
             0000000000000                                                                   00000000                             
            0000000  00000                                                                  0000000                               
           00000     00000                                                                 00000                                  
         0000000000  00000        00000000     0000       000       0000     00000000    000000000000000       0000               
        000000000000 00000      000000000000   00000     00000     00000   000000000000 00000000000000000      0000               
           00000     00000     00000    00000   0000    0000000    0000  00000     00000   00000    00000     0000                
           00000     00000    00000      00000   0000   00000000  00000  0000       0000   00000     00000   0000                 
           00000     00000    00000      00000   00000 0000 0000 00000   000000000000000   00000      00000 00000                 
           00000     00000    00000      00000    000000000 000000000    00000             00000       000000000                  
           00000     000000    00000    00000      0000000   0000000     000000      00    00000       00000000     0000          
           00000      00000000  000000000000       000000     000000       0000000000000   00000        000000     000000         
            000        000000     00000000          0000       0000          000000000      000          0000       0000          
                                                                                                        00000                     
                                                                                                       00000                      
                                                                                                       0000                       
  `;

  console.log('%c' + ascii, 'color: #742DF8; font-family: monospace; font-size: 12px;');
  console.log('%c' + "> Willst du auch so eine? => Komm zu uns! https://flowefy.de/", 'color: #742DF8; font-size: 26px; font-family: arial;');

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </div>
  );
}

export default App;
