import React from 'react'

function Menu(props) {
	return (
		<>
			<header className="main-header">
				<h1 className="heading_main">Tree Visualizer</h1>
			</header>
			<div className="options">
			<div id="bst">
				<button onClick={() => props.statefunc([false,true,false])}>
					Binary Search Tree
				</button>
			</div>
			<div id="avl">
				<button onClick={() => props.statefunc([false,false,true])}>
					AVL Tree
				</button>
			</div>
			</div>
		</>
	)
}

export default Menu
