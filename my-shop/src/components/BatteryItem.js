import '../styles/BatteryItem.css'
import ItemRating from './ItemRating'

function BatteryItem({id, cover, name, star, lifetime}) {
    return (
        <li key={id} className='ps-battery-item'>
            <img className='ps-battery-item' src={cover} alt={'${name} cover'} />
            {name}
            <div>
                <ItemRating batteryLife='batt' scaleValue={lifetime} />
                <ItemRating batteryLife='star' scaleValue={star} />
            </div>
        </li>
    )
}

export default BatteryItem