import React from 'react';
import styles from '../../../style/EduTypeStyle.scss';
import Descrip from '../DescriptionBox.jsx';

export default class EducationType extends React.Component {
	
	render() {
		const school = this.props.data;
		let newText = school.description.split('</br>').map((item, index) => (
				<p key={index}>{item}</p>
			));
		return (
			<div className={styles.div}>
				<div className={styles.title}>{school.name}</div>
				<div className={styles.imgDiv} > 
					<a href={school.imgRef} onClick={() => false}> 
						<img src={'../../../../assets/' + school.imgSrc} width='100%' height='100%' /> 
					</a>
				</div>
				<div className={styles.timeDiv}> {school.startTime} - {school.endTime}  </div>
				<Descrip data={this.props.data.description}/>
			</div>
		);
	}
}