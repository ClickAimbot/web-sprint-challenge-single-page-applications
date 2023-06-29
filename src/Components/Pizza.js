import Form from './Form'
import { useNavigate } from 'react-router-dom'


export default function Pizza () {
    const navigate = useNavigate();
    const pizzaForm = () => {
        navigate('Form')
    }

    return (
        <div className='build-pizza' >
            <h1 onClick={pizzaForm} classname='pizza-button'>
                Build Your Own Pizza!
            </h1>
            <Form />
        </div>
    )
}