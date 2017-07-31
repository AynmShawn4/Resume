import React from 'react';
import { connect } from 'react-redux';
import { changePage, refresh, selectFilter} from '../actions';
import Nav from '../components/NavigationBar.jsx';
import SlidingComponent from '../components/SlidingComponent.jsx';
import Footer from '../components/Footer.jsx';
import {withRouter} from 'react-router-dom';

const mapStateToProps = function(state) {
	return {
		state: state
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		nav: {
			change: function(e){
				dispatch(changePage(e));
			}
		},

		body: {
			refresh: function(v){
				dispatch(refresh(v));
			},
			selectFilter: function(val, val2){
				dispatch(selectFilter(val, val2));
			}
		}

	}
}

const style = {
	backgroundImage: 'url(./assets/background.jpg)',
	backgroundAttachment: "fixed",
	height: '100vh',
	backgroundSize: 'cover',
	overflowX: 'hidden',
	overflowY: 'scroll'
}

class Mainpage extends React.Component {
	render(){
		return (
			<div style={style}>
				<Nav data={this.props.state.Nav} func={this.props.nav} currentPage={this.props.state.currentPage}/>
				<SlidingComponent data={this.props.state.Body.content} currentPage={this.props.state.currentPage}
				func={this.props.body}/>
				<Footer data={this.props.state.Footer}/>
			</div>
		);
	}
}

const page = connect(mapStateToProps, mapDispatchToProps)(Mainpage);

export default withRouter(page);