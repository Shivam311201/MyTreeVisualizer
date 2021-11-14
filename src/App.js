import React, { useEffect,useState } from 'react'
import './styles/App.css'
import './styles/BSTStyle.css'
import './styles/popup.css'
import './styles/mainMenuStyle.css'
import Menu from './components/Menu'
import BSTree from './components/bst/BSTree'
import AVLTree from './components/avl/AVLTree'
import usePopup from './hooks/usePopup'
import MainPopup from './components/MainPopup'

function App() {
	const [state, setState] = useState([true,false,false]);
	const [popup, togglePopup] = usePopup();

	useEffect(() => {
			togglePopup();
	}, []);

	return (
		<div className="App">
			{(state[0]===true) && <Menu statefunc={setState} />}
			{(state[1]===true) && <BSTree statefunc={setState} />}
			{(state[2]===true) && <AVLTree statefunc={setState} />}
			{popup ? <MainPopup toggle={togglePopup} /> : null}
		</div>
	)
}

export default App;
