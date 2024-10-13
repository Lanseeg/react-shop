import logo from '../assets/images/cart.jpg'
import '../styles/Banner.css'

function Banner() {
    const title = "Peran's Shop"
    return (
        <div className='ps-banner'>
            <img src={logo} alt='Peran shop banner' className='ps-logo' />
            <h1 className='ps-title'>{title}</h1>
        </div>
    )
}

export default Banner