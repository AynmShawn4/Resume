import React from 'react';
import Home from './HomeComponent.jsx';
import Qualification from './Qualification.jsx';
import ListContainer from './ListContain.jsx';
import styles from '../../style/SlidingStyle.scss';

export default class SlidingComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentPage: 0,
			lastTime: 0,
			divStyle: styles.slideIn,
			slide : null
		}
		this.calCulateRenderPage = this.calCulateRenderPage.bind(this);
	}

	componentDidMount(){
		this.setState({currentPage: this.props.currentPage, lastTime: this.props.currentPage});
	}

	componentWillReceiveProps(nextProps){
		var that = this;
		if (this.state.lastTime !== nextProps.currentPage){
			clearTimeout(this.state.slide);
			this.setState({divStyle: styles.slideOut, lastTime: nextProps.currentPage});
			this.state.slide = setTimeout(function(){
				that.setState({divStyle: styles.slideIn, currentPage: nextProps.currentPage});
			}, 200);
		}
	}

	calCulateRenderPage(){
		switch (this.props.data[this.state.currentPage].type){
			case 'home': 
				return <div className={this.state.divStyle}><Home data={this.props.data[this.state.currentPage]}/></div>
			case 'Qualification':
				return <div className={this.state.divStyle}><Qualification data={this.props.data[this.state.currentPage].list}/></div>
			case 'List1':
				return <div className={this.state.divStyle}><ListContainer data={this.props.data[this.state.currentPage].list} type={1}/></div>
			case 'List2':
				return <div className={this.state.divStyle}>
				<ListContainer data={this.props.data[this.state.currentPage].list} func={this.props.func} loc={this.state.currentPage}
				tags={this.props.data[this.state.currentPage].tags} filter={this.props.data[this.state.currentPage].filter} type={2}/></div>
			case 'List3':
				return <div className={this.state.divStyle}><ListContainer data={this.props.data[this.state.currentPage].list} type={3}/></div>
			default:
				break;	
		}
	}

	render() {
		const result = this.calCulateRenderPage();
		this.state.change = false;
		return (
			<div>
				{result}
			</div>
		);
	}

}