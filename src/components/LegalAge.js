// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';

// Variables
const $ = window.jQuery;

// Classe
class LegalAge extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.legalRef = React.createRef();
	};

	// Render
	render(){
		return(
			<div className="legal" ref={ this.legalRef }>

				{/* Inner legal */}
				<div className="innerLegal">

					{/* Logo WF */}
					<div className="logoWFLegal">
						<img src={ `${this.props.whiteStore.URLImage}/iconesSprites/whitefrontier_white.png` } 
							alt="Logo White Frontier" />
					</div>
					{/* Logo WF */}

					{/* Question */}
					<div className="questionLegal">Do you have the legal drinking age in your country</div>
					<div className="choixLegal">
						<span></span>
						<p>Make you choice</p>
						<span></span>
					</div>
					{/* Question */}

					{/* Réponse */}
					<div className="zoneReponse">
						<div className="reponseBtn">
							<span></span>
							<a href="https://www.whitefrontier.ch/" title="Handcrafted beer White Frontier" 
								onClick={ this.handleClick.bind(this, true) }>
								Yes
							</a>
							<span></span>
						</div>
						<div className="reponseBtn">
							<span></span>
							<a href="https://www.cocacola.com/" title="Coca Cola Website" 
								onClick={ this.handleClick.bind(this, false) }>
								No
							</a>
							<span></span>
						</div>
					</div>
					{/* Réponse */}
					
				</div>
				{/* Inner legal */}
				
			</div>
		);
	};

	// Réponse âge légal
	handleClick(legal,e){
		e.preventDefault();
		if (legal){
			$(this.legalRef.current).fadeOut('slow', () => {
				this.props.whiteStore.setLegal(legal);
			});
		} else {
			window.location = 'https://www.cocacola.com';
		}
	};

};

// Export
export default inject('whiteStore')(observer(LegalAge));