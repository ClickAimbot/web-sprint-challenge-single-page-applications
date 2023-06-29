import {} from 'react-router-dom'



export default function Home () {
    const routeToForm = () => {
        
    }

    return (
        <div className='home-wrapper' id='order-pizza'>
            <button onClick={routeToForm} classname='form-button'>
                Build Your Own Pizza!
            </button>
        </div>
    )
}