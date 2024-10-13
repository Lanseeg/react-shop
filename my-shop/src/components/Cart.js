function Cart() {
	const item1Price = 8
	const item2Price = 10
	const item3Price = 15
	return (
		<div>
			<h2>Shopping Cart</h2>
			<ul>
				<li>Item 1 : {item1Price}€</li>
				<li>Item 2 : {item2Price}€</li>
				<li>Item 3 : {item3Price}€</li>
			</ul>
			Total : {item1Price + item2Price + item3Price}€
		</div>
	)
}

export default Cart