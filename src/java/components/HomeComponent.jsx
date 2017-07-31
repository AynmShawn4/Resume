import React from 'react';
import styles from '../../style/homeStyle.scss';
import Description from './DescriptionBox.jsx';

export default class HomeComponent extends React.Component {

	render() {
		const quotes = this.props.data.quote.quote.split('</br>').map((item, index) => (
				 <p key={index}>{item}</p>
			));
		return (
			<div className={styles.div}>
				<div className={styles.quoteDiv}>
					 {quotes} - {this.props.data.quote.by}
				</div>
				<div className={styles.photoDiv}>
					<img className={styles.photo} src={"../../../assets/" + this.props.data.img} />
				</div>
				<Description data={this.props.data.description}/>
			</div>
		);
	}

}