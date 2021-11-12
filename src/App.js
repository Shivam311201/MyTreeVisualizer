import React, { useReducer, useEffect } from 'react'
import './styles/App.css'
import './styles/BSTStyle.css'
import './styles/popup.css'
import './styles/mainMenuStyle.css'
import Menu from './components/Menu'
import BSTree from './components/bst/BSTree'
import AVLTree from './components/avl/AVLTree'
import usePopup from './hooks/usePopup'
import MainPopup from './components/MainPopup'

const initialState = {
	menu: true,
	bst: false,
	avl: false,
}

const reducer = (state, action) => {
	switch (action) {
		case 'menu':
			return { ...initialState, menu: true }
		case 'bst':
			return { ...initialState, bst: true, menu: false }
		case 'avl':
			return { ...initialState, avl: true, menu: false }
		default:
			return state
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [popup, togglePopup] = usePopup()

	useEffect(() => {
			togglePopup()
	}, [])

	return (
		<div className="App">
			
			{state.menu && <Menu selector={dispatch} togglePopup={togglePopup}/>}
			{state.bst && <BSTree selector={dispatch} />}
			{state.avl && <AVLTree selector={dispatch} />}
			{popup ? <MainPopup toggle={togglePopup} /> : null}
		</div>
	)
}

export default App
