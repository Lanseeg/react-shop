import { batteryList } from '../datas/batteryList'
import '../styles/ShoppingList.css'
import '../styles/Cart.css'

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
				{batteryList.map((battery) => (
					<li key={battery.id} className='ps-battery-item'>
                        {battery.name}
                        {battery.isSpecialOffer && <div className='ps-sales'>Sales</div>}
                    </li>
				))}
			</ul>
        </div>
    )
}

export default ShoppingList