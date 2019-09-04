import React from 'react'; // importa o React
import './App.css'; // importa o css da página

import Header from './components/Header'; // importa a lista contendo os posts e seus conteúdos
import PostList from './components/PostList'; // importa a lista contendo os posts e seus conteúdos

function App() {
	return (
		<>
			<Header />
			<PostList />
		</>
	);
}

export default App;
