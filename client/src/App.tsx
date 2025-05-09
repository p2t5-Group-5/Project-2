import { Outlet } from 'react-router-dom';
import TitleBar from './components/TitleBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <TitleBar/>
      <Navbar />
      <main className='container pt-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
