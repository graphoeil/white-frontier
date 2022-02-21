// Imports
import React from 'react';
import { inject } from 'mobx-react';

// Variables
const $ = window.jQuery;
const gsap = window.gsap;

// Classe
class SliderBouteilles extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.sliderRef = React.createRef();
	}

	// Render
	render(){
		return(
			<div className="sliderBouteilles" ref={ this.sliderRef }></div>
		);
	};

	// Animation des bouteilles
	componentDidMount(){

		// Bouteille
		const Bouteille = function(pBouteille){
			// Variables
			const nomImage = pBouteille.image;
			// .bouteille
			const $bouteille = $('<div></div>').addClass('bouteille');
			// .photoBouteille
			const $photoBouteille = $('<div></div>').addClass('photoBouteille').appendTo($bouteille);
			// Image
			const $image = $('<img/>').attr('src',nomImage).on('load', afficheBouteille).on('error', erreurImage);
			// Image chargée, nous affichons la bouteille
			function afficheBouteille(){
				$photoBouteille.css({
					backgroundImage:'url("' + $image.attr('src') + '")',
					backgroundPosition:'center',
					backgroundRepeat:'no-repeat',
					backgroundSize:'contain'
				});
				gsap.to($bouteille,{ duration:1, left:0, ease:'bounce.out', onComplete:bouteilleSuivante });
			};
			// Erreur durant le chargement de l'image => bouteille suivante
			function erreurImage(){
				$(document).trigger('whiteFrontier.bouteilleSuivante');
			};
			// La bouteille repart => bouteille suivante
			function bouteilleSuivante(){
				gsap.to($bouteille,{ duration:1, left:'-100%', ease:'bounce.in', delay:2 });
				$(document).trigger('whiteFrontier.bouteilleSuivante');
			};
			// Return
			return $bouteille;
		};

		// Variables
		const arrayDesBouteilles = [
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/berlinerweisse.png` },
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/coconutvanillamilkshake.png` },
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/coldesplanches-web.png` },
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/cowl-web.png` },
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/hopfenweisse.png` },
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/imperialstout.png` },
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/milkstout.png` },
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/nedipa-web.png` },
			{ image:`${this.props.whiteStore.URLImage}/bouteilles/saisonvendanges2.png` }
		];
		const arrayDesBoutAff = [];
		let bouteilleEnCours = -1;
		const $slider = $(this.sliderRef.current);
		let $bouteille;

		// Crée une bouteille
		function creeBouteille(){
			if (bouteilleEnCours >= arrayDesBouteilles.length-1){
				bouteilleEnCours = 0;
			} else {
				bouteilleEnCours++;
			}
			$bouteille = new Bouteille(arrayDesBouteilles[bouteilleEnCours]);
			$slider.append($bouteille);
			arrayDesBoutAff.push($bouteille);
			// Nettoyage
			while (arrayDesBoutAff.length > 2){
				let $bouteilleASupprimer = arrayDesBoutAff.shift();
				$slider.find($bouteilleASupprimer).remove();
				$bouteilleASupprimer = null;
			}
		};

		// Bouteille suivante
		$(document).on('whiteFrontier.bouteilleSuivante', function(){
			setTimeout(creeBouteille, 1800);
		});

		// Init
		creeBouteille();

	};

};

// Export
export default inject('whiteStore')(SliderBouteilles);