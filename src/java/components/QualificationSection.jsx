import React from 'react';
import styles from '../../style/qualiSectionStyle.scss';

const names = [ styles.progressBar, styles.progressBar1, 
styles.progressBar2, styles.progressBar3, styles.progressBar4];

const prof = ['Fundamental', 'Novice', 'Intermediate', 'Advanced', 'Expert'];

export default class QualificationSection extends React.Component {
	render(){
		const data = this.props.info.list.map(function(item, index){
			const pBar = <div className={names[item.proficiency - 1]}>{prof[item.proficiency - 1]}</div>;
			return <div key={index} className={styles.singleItem}>
				<div className={styles.name}>{item.name} :</div>
				<div className={styles.proficiency}> 
					{pBar} 
				</div>
			</div>
		})
		return (
			<div className={styles.sectionDiv} >
				<div className={styles.title}>{this.props.info.name}</div>
				<div >{data}</div>
			</div>
		);
	}
}