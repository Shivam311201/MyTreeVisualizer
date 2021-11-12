import React from 'react'
import { Icon } from '@iconify/react'
import closeCircleF from '@iconify/icons-jam/close-circle-f'

function AVLPopup(props) {
	return (
		<div className="popup">
			<div className="inner">
				<h1>Help</h1>
				<Icon
					className="icon"
					onClick={props.toggle}
					width="35px"
					height="35px"
					icon={closeCircleF}
				/>
				<div>
					<ul className="help-list">
						<li>
							<button>Insert</button> Inserts a node
						</li>
						<li>
							<button>Search</button> Searches and highlights the
							value
						</li>
						<li>
							<button>Delete</button> Deletes the node
						</li>
						<li>
							<button>Clear</button> Removes all nodes
						</li>
						<li>
							<button>Traversal</button> Performs chosen traversal
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default AVLPopup
