import { useNavigate } from 'react-router-dom';

export default function Home () {
    const navigate = useNavigate()
    const routeToForm = () => {
        navigate('pizza')
    }

    return (
        <div className='home-wrapper'>
            <h1>Who wants pizza with their coding?</h1>
            <button onClick={routeToForm} id='order-pizza' classname='form-button'>
                Pizza?
            </button>           
        </div>
    )
}