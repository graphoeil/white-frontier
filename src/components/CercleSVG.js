// Imports
import React from 'react';

// Classe
class CercleSVG extends React.Component{

	// Render
	render(){
		return(
			<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
				<circle className="cercleSVG" fill="none" stroke="#ffffff" strokeWidth="5" strokeMiterlimit="10" cx="25" cy="25" r="15"/>
			</svg>
		);
	};

};

// Export
export default CercleSVG;