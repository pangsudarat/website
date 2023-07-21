import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import About from './About'
import Navbar from './components/Navbar'




function Routing(){
    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<App />}  />
        <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    
}

export default Routing