import React from 'react';
import { connect } from 'react-redux';
import {  } from '../actions';
import styles from '../../style/welcomeStyle.scss';
import bgImage from '../../../assets/MilkyWay.jpg';
import {Link, withRouter} from 'react-router-dom';

const mapStateToProps = function(state, ownProps) {
	return {
		data: state.welcome,
		change: ownProps.change
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
	}
}

class WelcomePage extends React.Component {
	change(){
		this.props.change();
	}
	render(){
		return (
			<div className={styles.bodyDiv}>
				<img src={'./assets/MilkyWay.jpg'} className={styles.bgImg}/>
				<div className={styles.textDiv}>
					<h1 className={styles.h1} >{this.props.data.topMsg}</h1>
					<p className={styles.para}>{this.props.data.middleMsg}</p>
					<h1 className={styles.h1} >{this.props.data.lowerMsg}</h1>
					<Link to='/main'><button className={styles.btn}>Enter</button></Link>
				</div>
			</div>
		);
	}

}
const WelcomePageContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

export default withRouter(WelcomePageContainer);