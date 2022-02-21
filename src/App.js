// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import './css/displayMain.css';
import Loader from './components/Loader';
import LegalAge from './components/LegalAge';
import Header from './components/Header';
import Main from './components/Main';

// Classe
class App extends React.Component{

	// Render
	render(){
		return(
			<React.Fragment>

				{/* Loader */}
				{
					this.props.whiteStore.loaderVisible && <Loader/>
				}
				{/* Loader */}

				{/* LegalAge */}
				{
					!this.props.whiteStore.isLegal && <LegalAge/>
				}
				{/* LegalAge */}

				{/* Header */}
				<Header/>
				{/* Header */}

				{/* Main */}
				<Main/>
				{/* Main */}

			</React.Fragment>
		);
	};

};

// Export
export default inject('whiteStore')(observer(App));