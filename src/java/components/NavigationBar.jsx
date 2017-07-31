import React from 'react';
import styles from '../../style/navStyle.scss';
import NavSection from './NavSection.jsx';

export default class NavigationBar extends React.Component {

	render() {
		return (
			<div className={styles.div}>
				<div className={styles.innerDiv}>
					<a  className={styles.icon}>{this.props.data.name}</a>
					<NavSection data={this.props.data.rightSection} 
					func={this.props.func} currentPage={this.props.currentPage}/>
				</div>
			</div>
		);
	}

}