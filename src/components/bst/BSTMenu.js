import React, { useRef,useState } from 'react'

function BSTMenu(props) {

	const[Insert,setInsert]=useState('');
	const[Search,setSearch]=useState('');
	const[Delete,setDelete]=useState('');
	const[traversalList,setTraversal]=useState([]);

	return (
		<div className="menu">
			<ul id="mainBST">
				<li>
					<input
						placeholder="Insert"
						value={Insert}
						type="number"
						onChange={(e) => setInsert(e.target.value)}
						onKeyUp={e => {
							if (e.keyCode === 13) {
								props.insert(Insert);
							}
						}}
						className={props.insError}
					/>
					<button onClick={()=>{props.insert(Insert);}} 
					className="insert">
						Insert
					</button>
				</li>
				<li>
					<input
						placeholder="Search"
						type="number"
						value={Search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyUp={e => {
							if (e.keyCode === 13) {
								props.search(Search);
							}
	 					}}
						className={props.seaError}
					/>
					<button onClick={()=>{
						props.search(Search);
					}}>
					Search
					</button>
				</li>
				<li>
					<input
						placeholder="Delete"
						type="number"
						onChange={(e) => setDelete(e.target.value)}
						onKeyUp={e => {
							if (e.keyCode === 13) {
								props.delete(Delete);
							}
						}}
						className={props.delError}
					/>
					<button onClick={()=>{
						props.delete(Delete);
					 }} className="delete">
						Delete
					</button>
				</li>
				<li>
					<button onClick={()=>{
						props.clear();
						setDelete('');
						setInsert('');
						setSearch('');
						}}>Clear</button>
				</li>
				<li className="dropdown">
					<button>Traversal</button>
					<div className="dropdown-content">
						<ul>
							<li>
								<button onClick={() =>{
									setTraversal([]);
									props.tree.inorder(traversalList);
									props.setList(traversalList);
									props.traversalName("Inorder:");
									}}>
									Inorder
								</button>
							</li>
							<li>
								<button onClick={() => {
									setTraversal([]);
									props.tree.preorder(traversalList);
									props.setList(traversalList);
									props.traversalName("Preorder:");
									}}>
									Preorder
								</button>
							</li>
							<li>
								<button onClick={() =>{
									setTraversal([]);
									props.tree.postorder(traversalList);
									props.setList(traversalList);
									props.traversalName("Postorder:");
									}}>
									Postorder
								</button>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default BSTMenu
