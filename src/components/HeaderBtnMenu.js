// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import * as classNames from 'classnames';

// Class
class HeaderBtnMenu extends React.Component{

	// Render
	render(){

		// Classes dynamiques
		const btnClass = classNames({
			'active':this.props.title === this.props.whiteStore.btnActif
		});

		// Return
		return(
			<a href={ this.props.link } title={ this.props.title } className={ btnClass } onClick={ this.handleBtnActif.bind(this) }>
				{ this.props.text }
			</a>
		);

	};

	// Bouton / page active
	handleBtnActif(e){
		e.preventDefault();
		const btnName = e.target.title;
		this.props.whiteStore.setBtnActif(btnName);
	};

};

// Export
export default inject('whiteStore')(observer(HeaderBtnMenu));