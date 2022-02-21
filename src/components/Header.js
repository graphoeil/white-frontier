// Imports
import React from 'react';
import { inject } from 'mobx-react';
import HeaderBtnMenu from './HeaderBtnMenu';

// Variables
const $ = window.jQuery;
const gsap = window.gsap;

// Classe
class Header extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.mainMenuRef = React.createRef();
		this.overlayRef = React.createRef();
	};

	// Render
	render(){

		// Return
		return(
			<header>

				{/* Btn menu mobile */}
				<div className="btnMenuMobile" onClick={ this.handleMenu.bind(this, true) }>
					<i className="fas fa-bars"></i>
				</div>
				{/* Btn menu mobile */}

				{/* Main menu */}
				<div className="mainMenu" ref={ this.mainMenuRef }>

					{/* Logo WF */}
					<div className="logoMenu">
						<img src={ `${this.props.whiteStore.URLImage}/iconesSprites/whitefrontier.png` } alt="Logo WF" />
					</div>
					{/* Logo WF */}

					{/* Btn ferme menu */}
					<div className="fermeMenuMobile" onClick={ this.handleMenu.bind(this, false) }>
						<i className="fas fa-times"></i>
					</div>
					{/* Btn ferme menu */}

					{/* Navigation */}
					<nav>
						<ul className="topLevelMenu">
							{/* Home */}
							<li><HeaderBtnMenu link="#home" title="home" text="Home"/></li>
							{/* Home */}
							{/* Brewery */}
							<li>
								<HeaderBtnMenu link="#brewery" title="brewery" text="Brewery"/>
								<ul className="subLevelMenu">
									<li>
										<HeaderBtnMenu link="#team" title="team" text="Team"/>
									</li>
									<li>
										<HeaderBtnMenu link="#visit" title="visit" text="Visit the brewery"/>
									</li>
									<li>
										<HeaderBtnMenu link="#access" title="access" text="Access"/>
									</li>
								</ul>
							</li>
							{/* Brewery */}
							{/* Beers */}
							<li><HeaderBtnMenu link="#beers" title="our beers" text="Our beers"/></li>
							{/* Beers */}
							{/* Ambassadors */}
							<li><HeaderBtnMenu link="#ambassadors" title="ambassadors" text="Ambassadors"/></li>
							{/* Ambassadors */}
							{/* Social */}
							<li><HeaderBtnMenu link="#social" title="social" text="Social"/></li>
							{/* Social */}
							{/* Shop */}
							<li><HeaderBtnMenu link="#shop" title="shop" text="Shop"/></li>
							{/* Shop */}
							{/* Find */}
							<li><HeaderBtnMenu link="#find" title="find our beers" text="Find our beers"/></li>
							{/* Find */}
							{/* Contact */}
							<li><HeaderBtnMenu link="#contact" title="contact" text="Contact"/></li>
							{/* Contact */}
						</ul>
					</nav>
					{/* Navigation */}

					{/* Social */}
					<div className="socialMenu">
						<a href="https://www.instagram.com/whitefrontier/" title="WF Instagram" target="_blank" 
							rel="noopener noreferrer">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.facebook.com/whitefrontier/" title="WF Facebook" target="_blank" 
							rel="noopener noreferrer">
							<i className="fab fa-facebook-f"></i>
						</a>
					</div>
					{/* Social */}

					{/* Made by */}
					<div className="madeBy">
						<span>React-ified by</span>
						<a href="http://www.graphoeilmultimedia.com" title="Front-end developper" target="_blank" 
							rel="noopener noreferrer">
							<i className="fas fa-copyright"></i>Graphoeil
						</a>
					</div>
					{/* Made by */}

				</div>
				{/* Main menu */}

				{/* Overlay */}
				<div className="overlayMobile" ref={ this.overlayRef }></div>
				{/* Overlay */}

			</header>
		);
	};

	// Ouverture / Fermeture menu mobile
	handleMenu(isOpen){
		// Dispatch store
		this.props.whiteStore.setMenuMobileOuvert(isOpen);
		// Variables
		const $mainMenu = $(this.mainMenuRef.current);
		const $overlay = $(this.overlayRef.current);
		// Animation
		if (isOpen){
			gsap.to($mainMenu,{ duration:0.5, left:0, ease:'power4.inOut' });
			$overlay.fadeIn('fast');
		} else {
			gsap.to($mainMenu,{ duration:0.5, left:-250, ease:'power4.inOut' });
			$overlay.fadeOut('fast');
		}
	};

	// Window resize
	componentDidMount(){
		// Variables
		const $mainMenu = $(this.mainMenuRef.current);
		const $overlay = $(this.overlayRef.current);
		let timerResize;
		const $window = $(window);
		// Event
		$window.on('resize orientationchange', () => {
			if (timerResize){ clearTimeout(timerResize); }
			timerResize = setTimeout(() => {
				if ($window.width() >= 768){
					$mainMenu.add($overlay).removeAttr('style');
					this.props.whiteStore.setMenuMobileOuvert(false);
				}
			},200);
		}).trigger('resize');
	};

};

// Export
export default inject('whiteStore')(Header);