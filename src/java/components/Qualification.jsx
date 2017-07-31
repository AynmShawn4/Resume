import React from 'react';
import styles from '../../style/qualiStyle.scss';
import Section from './QualificationSection.jsx';

export default class Qualification extends React.Component {
	render(){
		const sections = this.props.data.map((item, index) => (
				<Section key={index} info={item}/>
			) )
		return (
			<div className={styles.div}>
				{sections}
			</div>
		);
	}
}