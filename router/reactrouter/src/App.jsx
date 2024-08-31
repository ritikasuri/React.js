
import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/Header'
import{outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-500 text-white text-center '></h1>
    

      <Header/>
      <outlet/>

      <Footer/>

    </>
  )
}

export default App
