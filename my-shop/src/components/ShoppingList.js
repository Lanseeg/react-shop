import { batteryList } from '../datas/batteryList'
import '../styles/ShoppingList.css'
import '../styles/Cart.css'
import BatteryItem from './BatteryItem'
import '../styles/BatteryItem.css'

function ShoppingList() {
    const categories = batteryList.reduce(
        (acc, battery) => 
            acc.includes(battery.category) ? acc : acc.concat(battery.category),
        []
    )

    return (
        <div>
            <ul className='ps-cart'>
                {categories.map((cat) =>(
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='ps-battery-list'>
				{batteryList.map(({ id, cover, name, star, lifetime }) => (
					<BatteryItem 
                    id={id}
                    cover={cover}
                    name={name}
                    star={star}
                    lifetime={lifetime}
                    />
				))}
			</ul>
        </div>
    )
}

export default ShoppingList