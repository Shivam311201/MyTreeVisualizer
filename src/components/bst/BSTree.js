import React, { useState, useEffect } from 'react'
import BSTMenu from './BSTMenu'
import BST from './DataStructure'
import BSTPopup from './BSTPopup'
import useDelError from '../../hooks/useDelError'
import { Icon } from '@iconify/react'
import questionMarkCircleOutline from '@iconify/icons-eva/question-mark-circle-outline'
import usePopup from '../../hooks/usePopup'

function BSTree(props) {
	//hooks
	const [tree, setTree] = useState();
	const [treeHtml, setTreeHtml] = useState();
	const [delError, setDelError] = useDelError(treeHtml);
	const [searchError, setSearchError] = useDelError(treeHtml);
	const [Name, setName] = useState("");
	const [popup, togglePopup] = usePopup();
    const [list,setList]=useState([]);

	//Initializing Tree
	useEffect(() => {
		let tempTree = new BST();
		setTree(tempTree);
		return () => {
			setTree(null);
			setTreeHtml(null);
		}
	}, [])

	//Insert Function
	const insert = (val) => {
		val = parseInt(val);
		if (!val) return;
		let tempTree = tree;
		tempTree.insert(val);
		setTree(tempTree);
		setTreeHtml(tree.root.html);
		setName("");
		setList([]);
	}
    const random = (num) => {
		num = parseInt(num)
		if (num < 0) return;
		let tempTree = new BST(num)
		setTree(tempTree);

		if (num) setTreeHtml(tempTree.root.html);
		else setTreeHtml(null);
		setName("");
		setList([]);
	}
	//Remove
	const remove = val => {
		val = parseInt(val)
		let tempTree = tree;
		setDelError(false);
		if (!tempTree.search(val)) {
			setDelError(true);
			return;
		}
		tempTree.remove(val);
		setTree(tempTree);
		if (tree.root) setTreeHtml(tree.root.html);
		else setTreeHtml(null);
		setName("");
		setList([]);
	}

	//Search
	const search = val => {
		val = parseInt(val)
		let tempTree = tree;

		setSearchError(false)
		if (!tempTree.search(val)) {
			setSearchError(true);
			return;
		}
		
		tempTree.search(val);
		setTree(tempTree);
		if (tree.root) setTreeHtml(tree.root.html);
		else setTreeHtml(null);
	}


	return (
		<div>
			<header>
				<h1 className="heading">
					Binary Search Tree
					<button className="question_but" onClick={togglePopup}>
					<Icon
							icon={questionMarkCircleOutline}
							width="25px"
							height="25px"
						/>
					</button>
				</h1>
				<button
					onClick={() => props.statefunc([true,false,false])}
					className="main-menu-button"
				>
					Home
				</button>
			</header>
			<BSTMenu
				insert={insert}
				remove={remove}
				search={search}
				random={random}
				tree={tree}
				traversalName={setName}
				setList={setList}
				delError={delError ? 'error' : ''}
				seaError={searchError ? 'error' : ''}
			/>
			<div className="traversal">
				{list.length ? (
					<ul>
						{' '}
						{Name}
						{list.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				) : (
					<p>No Traversal Performed</p>
				)}
			</div>
			<div className="tree">
				<ul>{treeHtml}</ul>
			</div>
			{popup ? <BSTPopup toggle={togglePopup} /> : null}
		</div>
	)
}

export default BSTree
