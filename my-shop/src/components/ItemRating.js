import star from '../assets/images/star.png'
import batt from '../assets/images/batt.jpg'

function ItemRating({ scaleValue, batteryLife }) {
	const range = [1, 2, 3, 4, 5]
	const scaleType =
		batteryLife === 'star' ? (
			<img src={star} alt='star-icon' />
		) : (
			<img src={batt} alt='batt-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default ItemRating