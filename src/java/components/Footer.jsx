import React from 'react';
import styles from '../../style/FooterStyle.scss';

const path = './assets/FooterIcons/';
export default class Footer extends React.Component {
	constructor(props){
		super(props);
		this.calculate = this.calculate.bind(this);
	}
	
	calculate(it, id){
		switch (it.type){
			case 'email':
				return  <div key={id} className={styles.itemList}>
							<img src={path + it.type + '.png'} className={styles.imgIcon}/> 
							<div className={styles.itemText}> {it.value}</div> 
						</div>
			default:
				return <div key={id} className={styles.itemList}>
							<a href={it.value}>
								<img src={path + it.type + '.png'} className={styles.imgIcon}/> 
							</a>
						</div>
		}
	}
	render(){
		var that = this;
		const result = this.props.data.content.map(function(item, index){
			const list = item.list.map(function(it, id){
				return that.calculate(it, id);
			});
			return  <div  key={index} className={styles.item}>
						<p className={styles.itemName} >{item.name}</p>{list}
					</div>;
		});
		return (
			<div className={styles.div}>
				<div className={styles.innerDiv}>
					<a  className={styles.icon}>{this.props.data.name}</a>
					<div className={styles.rightDiv}> {result} </div>
				</div>
			</div>
		);
	}

	
}