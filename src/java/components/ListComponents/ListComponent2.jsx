import React from 'react';
import styles from '../../../style/listComp2Style.scss';

export default class ListComponent2 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			imgSrc: '',
			imgSrc1: '',
			active: '',
			show: false,
			text: 'Show more',
			dir: styles.downTriangle,
			comp: styles.dropComp,
		}
	}

	componentDidMount(){
		this.setState({
			imgSrc: this.props.data.imgSrc,
			imgSrc1: this.props.data.imgSrc2,
			active: this.props.data.imgSrc

		})
	}

	dropDown(){
		console.log('called');
		if (this.state.show){
			this.setState({show: !this.state.show, text: 'Show more', 
				dir: styles.downTriangle, comp: styles.dropCompUp});
		} else {
			this.setState({show: !this.state.show, text: 'Show less', 
				dir: styles.upTriangle, comp: styles.dropCompDown});
		}
	}
	start() {
		this.setState({active: this.state.imgSrc1});
	}
	stop(){
		this.setState({active: this.state.imgSrc});

	}
	render(){
		const tags = this.props.data.tags.map((item,index) =>
			 (<span key={index} className={styles.tagItem}>{item}</span>  )  );
		const showBar = <div className={styles.dropdown} >
							<div className={styles.show}> {this.state.text}
							</div>
							<div className={this.state.dir} onClick={() => this.dropDown()}/> 
						</div>;
						console.log(this.state.comp);
		const dropdownComp = <div className={this.state.comp}> 
								<div className={styles.descrip}> {this.props.data.description}</div>
								<div className={styles.website}><a href={this.props.data.website}> {this.props.data.website}</a> </div>
								<div className={styles.tag}> {tags} </div>
							</div>;
		return (
			<div className={styles.div}>	
				<div className={styles.title}>{this.props.data.name} </div>
				<div className={styles.img}> 
					<img  src={'./assets/' + this.state.active} width="100%" height="100%"
					onMouseEnter={() => this.start()} onMouseLeave={() => this.stop()} /></div>
				{showBar }
				{dropdownComp}

			</div>
		);
	}
}