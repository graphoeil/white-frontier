// Imports
import React from 'react';
import BlocDroitMini from './BlocDroitMini';

// Classe
class BlocDroit extends React.Component{

	// Render
	render(){
		return(
			<div className="blocDroit">

				{/* Haut */}
				<div className="blocDroitHaut">
					<BlocDroitMini texte="Brewery" image="stepIWF.png" alt="WF Brewery Logo"/>
				</div>
				{/* Haut */}

				{/* Bas */}
				<div className="blocDroitBas">

					{/* Ambassadors */}
					<BlocDroitMini image="ambassadors.png" alt="Ambassadors Logo"/>
					{/* Ambassadors */}

					{/* SocialWF */}
					<BlocDroitMini image="socialWF.png" alt="WF Social Logo"/>
					{/* SocialWF */}

					{/* ShopWF */}
					<BlocDroitMini image="shopWF.png" alt="WF Shop Logo"/>
					{/* ShopWF */}

				</div>
				{/* Bas */}

			</div>
		);
	};

};

// Export
export default BlocDroit;