import React from 'react';
import styles from '../../style/PhotoCompStyle.scss';
import PhotoModal from './PhotoModal.jsx';

export default class PhotoComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			modalIsOpen: false,
			imgCol: [],
			finished: false,
			index: 0,
			modalImage: 0
		};
		this.closeModal = this.closeModal.bind(this);
		this.goLeft = this.goLeft.bind(this);
		this.goRight = this.goRight.bind(this);
		this.calculate = this.calculate.bind(this);
	}

	openModal(x){
		this.setState({modalIsOpen: true, modalImage: x});
	}
	closeModal(e){
		this.setState({modalIsOpen: false});
	}
	goLeft(){
		if (this.state.modalImage === 0){
			this.setState({modalImage: this.state.imgCol.length - 1});
		} else {
			this.setState({modalImage: this.state.modalImage - 1});
		}
	}
	goRight(){
		if (this.state.modalImage === this.state.imgCol.length - 1){
			this.setState({modalImage: 0});
		} else {
			this.setState({modalImage: this.state.modalImage + 1});
		}

	}

	calculate(data){
		var that = this;
		const result = data.map(function(item, index){
			if (!that.state.finished) {that.state.imgCol.push({
				imgSrc: item.imgSrc, descrip: item.description, index: that.state.index}); that.state.index++;}
				return <img key={index} onClick={() => that.openModal(item.index) }
					className={item.type === 's'? styles.imgSqare : styles.imgLong} src={'../../../assets/' + item.imgSrc} />
			});
		return result;
	}
	render(){
		const toRender = this.calculate(this.props.data);
		this.state.finished = true;
		const item = this.state.imgCol[this.state.modalImage];
		return(
			<div className={this.state.modalIsOpen === true? styles.divModalOpen : styles.div}>
				<PhotoModal modalIsOpen={this.state.modalIsOpen} close={this.closeModal}
				goLeft={this.goLeft} goRight={this.goRight} img={'../../../assets/' + item.imgSrc} description={item.descrip}/>
				{toRender}
		
			</div>
		);
	}
}		