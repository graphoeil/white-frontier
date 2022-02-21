// Imports
import { makeObservable, action, observable } from "mobx";

// Classe
class WhiteStore{

	// Constructeur
	constructor(){
		// Variables observables
		makeObservable(this,{
			// Loader
			loaderVisible:observable,
			// Legal
			isLegal:observable,
			// Header
			menuMobileOuvert:observable,
			btnActif:observable
		});
		// Âge légal validé ?
		this.getLegal();
	};

	// Variables
	//
	// URL Image
	URLImage = 'http://www.graphoeilmultimedia.com/reactDev/whiteFrontier/imagesWWW';
	// Loader
	loaderVisible = true;
	// Legal
	isLegal = false;
	// Header
	menuMobileOuvert = false;
	btnActif = 'home';

	// Méthodes
	//
	// Loader
	hideLoader = action(() => {
		this.loaderVisible = false;
	});
	// Legal
	getLegal = action(() => {
		if (localStorage.getItem('whiteFrontierLegal')){
			this.isLegal = true;
		}
	});
	setLegal = action((legal) => {
		this.isLegal = legal;
		if (legal){ localStorage.setItem('whiteFrontierLegal', this.isLegal); }
	});
	// Header
	setMenuMobileOuvert = action((isOpen) => {
		this.menuMobileOuvert = isOpen;
	});
	setBtnActif = action((name) => {
		this.btnActif = name;
	});

};

// Export
export default WhiteStore;