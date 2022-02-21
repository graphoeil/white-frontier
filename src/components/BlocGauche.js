// Imports
import React from 'react';
import { inject } from 'mobx-react';
import SliderBouteilles from './SliderBouteilles';

// Classe
class BlocGauche extends React.Component{

	// Render
	render(){
		return(
			<div className='blocGauche ombreBloc'>

				{/* Inner bloc */}
				<div className="innerBlocGauche">
					<div className="logoBlocGauche">
						<img src={ `${this.props.whiteStore.URLImage}/iconesSprites/theWFcollectionOF.png` } 
							alt="White Frontier collection logo" />
					</div>
					<span>Beer</span>
					<div className="logoBlocGauche">
						<img src={ `${this.props.whiteStore.URLImage}/iconesSprites/issueN02.png` } 
							alt="Issue logo" />
					</div>
					{/* Slider bouteilles */}
					<SliderBouteilles/>
					{/* Slider bouteilles */}
				</div>
				{/* Inner bloc */}

			</div>
		);
	};

};

// Export
export default inject('whiteStore')(BlocGauche);