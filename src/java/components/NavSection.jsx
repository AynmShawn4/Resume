import React from 'react';
import styles from '../../style/navStyle.scss';

export default class NavSection extends React.Component {

	render() {
		const result = this.props.data.map((item, index) => (
				<a key={index} className={(this.props.currentPage) === index ? styles.aActive : styles.a} 
				onClick={() => this.props.func.change(index)}>{item}</a>
			));
		return (
			<div className={styles.sectionDiv}>
				{result}
			</div>
		);
	}

}