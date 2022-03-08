const ItemsApp = () {
	const [items,setItems] = useState(['pain','dragon']);

	let li = [];
	for (let i = 0; i < items.length; i++){
		li.push(<li>{items[i]}</li>);
	}

	return <div>
		<h3>Items</h3>
		<ul>

		</ul>
	</div>;
};

export default ItemsApp;