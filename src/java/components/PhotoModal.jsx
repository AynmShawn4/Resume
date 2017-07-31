import React from 'react';
import Modal from 'react-modal';
import styles from './../../style/PhotoModalStyle.scss';
import DescriptionComponent from './DescriptionBox.jsx';

const style = {
	margin: 'auto'
}
const text = {
	color: 'rgba(216, 199, 4, 1)'
}
export default class PhotoModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			imgDivStyle: styles.img,
			timeout: null
		}
	}

	goLeft(){
		clearTimeout(this.state.timeout);
		this.setState({imgDivStyle: styles.imgSlideLeft});
		var that = this;
		this.state.timeout = setTimeout(function(){
			that.setState({imgDivStyle: styles.img});
			that.props.goLeft();

		}, 500);
	}
	goRight(){
		clearTimeout(this.state.timeout);
		this.setState({imgDivStyle: styles.imgSlideLeft});
		var that = this;
		this.state.timeout = setTimeout(function(){
			that.setState({imgDivStyle: styles.img});
			that.props.goRight();

		}, 500);
	}
	render(){
		return(
			<Modal
				isOpen={this.props.modalIsOpen}
	         	onRequestClose={this.props.close}
	          	contentLabel="Modal"
	          	className={{
	          		base: styles.div
	          		}
	          	}
	        >
	        <div className={styles.innerDiv}>
	        	<div className={styles.leftArrowDiv} onClick={() => this.goLeft()} ><div className={styles.triangleLeft}/> </div>
	        	<div className={styles.textImgDiv} >
		        	<div className={this.state.imgDivStyle} >
		        		<div style={style}> <img src={this.props.img} className={styles.i}/></div>
		        		<div style={text}><DescriptionComponent data={this.props.description}/></div>
		        	</div>
		        </div>
	        	<div className={styles.leftArrowDiv} onClick={() => this.goRight()}><div className={styles.triangleRight}/> </div>
	        </div>
	        <div className={styles.esc} onClick={this.props.close}> X </div>
	        </Modal>

         )
	}
}