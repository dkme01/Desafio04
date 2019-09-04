import React from 'react'; // importa o React
import { render } from 'react-dom'; // importa o render do react-dom(manipulador da árvore de elementos)

import App from './App'; // importa a aplicação para renderizar no html

render(<App />, document.getElementById('app')); // renderiza o App
