import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { ContextProvider } from "./context/foodMenus.context";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ContextProvider>
				<App />
			</ContextProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
