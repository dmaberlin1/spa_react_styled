import axios from "axios";
import {useState,useEffect} from "react";
import { Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Main from './components/Main'
import Controls from "./components/Controls";
import {ALL_COUNTRIES} from "./config";
import List from "./components/List";
import Card from "./components/Card";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
    const [countries, setCountries] = useState([]);

    return (
    <>
     <Header></Header>
        <Main>
        <Routes>
            <Route exact path='/' element={<HomePage countries={countries} setCountries={setCountries}/>}/>
            <Route path='/country/:name' element={<Details/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Main>
    </>
  );
}

export default App;
