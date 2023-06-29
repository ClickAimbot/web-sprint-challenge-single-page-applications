import { useNavigate, Routes, Route, Link } from 'react-router-dom'
import Pizza from './Pizza'

export default function Home () {
    const navigate = useNavigate()
    const routeToForm = () => {
        navigate('pizza')
    }

    return (
        <div className='home-wrapper' id='order-pizza'>
            <h1>Who wants pizza with their coding?</h1>
            <button onClick={routeToForm} classname='form-button'>
                Pizza?
            </button>
            <Routes>
                <Route path="pizza" element={<Pizza />} />
            </Routes>
        </div>
    )
}