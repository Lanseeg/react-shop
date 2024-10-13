import { batteryList } from "../datas/batteryList"

function ShoppingList() {
    const categories = batteryList.reduce(
        (acc, battery) => 
            acc.includes(battery.category) ? acc : acc.concat(battery.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) =>(
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
				{batteryList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
        </div>
    )
}

export default ShoppingList