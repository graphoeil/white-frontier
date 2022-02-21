// Imports
import React from 'react';
import { inject } from 'mobx-react';

// Classe
class BlocDroitMini extends React.Component{

	// Render
	render(){
		return(
			<div className="blocDroitMini ombreBloc">
				<div className="innerBlocDroitMini">
					{
						this.props.texte && <h2><span></span>{ this.props.texte }<span></span></h2>
					}
					<div className="logoBlocMini">
						<img src={ `${this.props.whiteStore.URLImage}/iconesSprites/${this.props.image}` } 
							alt={ this.props.alt } />
					</div>
				</div>
			</div>
		);
	};

};

// Export
export default inject('whiteStore')(BlocDroitMini);