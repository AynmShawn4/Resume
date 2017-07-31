import React from 'react';
import styles from '../../style/homeStyle.scss';
export default class DescriptionBox extends React.Component {

	render() {
		const result = this.props.data.split('</br>').map((item, index)=>
				<p key={index}>{item}</p>
			);
		return (
			<div className={styles.descriptionDiv}>
				{result}
			</div>
		);
	}

}