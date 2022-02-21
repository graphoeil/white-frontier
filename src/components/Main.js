// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import * as classNames from 'classnames';
import BlocGauche from './BlocGauche';
import BlocDroit from './BlocDroit';

// Classe
class Main extends React.Component{

	// Render
	render(){

		// Classe dynamique
		const mainClass = classNames({
			'menuMobileOuvert':this.props.whiteStore.menuMobileOuvert
		});

		// Return
		return(
			<main className={ mainClass }>
				
				{/* Content */}
				<div className="content">

					{/* Bloc gauche, slider */}
					<BlocGauche/>
					{/* Bloc gauche, slider */}

					{/* Bloc droit */}
					<BlocDroit/>
					{/* Bloc droit */}

				</div>
				{/* Content */}

			</main>
		);
	};

};

// Export
export default inject('whiteStore')(observer(Main));