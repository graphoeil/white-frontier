// Imports
import React from 'react';
import { inject } from 'mobx-react';
import CercleSVG from './CercleSVG';

// Variables
const $ = window.jQuery;
const gsap = window.gsap;

// Classe
class Loader extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.loaderRef = React.createRef();
	};

	// Render
	render(){
		return(
			<div className="loader" ref={ this.loaderRef }>
				<div className="conteneurSVG">
					<CercleSVG/>
				</div>
			</div>
		);
	};

	// Animation et chargement de l'image de fond
	componentDidMount(){

		// Variables
		const $loader = $(this.loaderRef.current);
		const $conteneurCercle = $loader.children('.conteneurSVG');
		const $cercleSVG = $loader.find('.cercleSVG');
		const tlLoader = gsap.timeline({ repeat:-1 });

		// Animation
		tlLoader
		.fromTo($cercleSVG,{ drawSVG:'0' },{ drawSVG:'100%', duration:1.2 },'+=0.25')
		.to($cercleSVG,{ drawSVG:'100% 100%', duration:1.2 },'+=0.25');
		// Rotation continue du loader
		const TweenCercle = gsap.to($conteneurCercle,{ duration:2, rotation:360, ease:'none', repeat:-1 });

		// Chargement de l'image légale
		$('<img/>').attr('src',`${this.props.whiteStore.URLImage}/background/legal_bg.jpg`).on('load', () => {
			setTimeout(() => {
				$loader.fadeOut('slow', () => {
					tlLoader.kill();
					TweenCercle.kill();
					this.props.whiteStore.hideLoader();
				});
			},100);
		});

	};

};

// Export
export default inject('whiteStore')(Loader);