import React from 'react';
import styles from '../../style/FilterStyle.scss';

export default class Filter extends React.Component {
	
	render(){
		var that = this;
		const tags = this.props.tags.map(function(item, index){
			for (let i = 0; i < that.props.filter.length; i++){

				if (item === that.props.filter[i]){
					return <div className={styles.tagActive} key={index} 
					onClick={() => that.props.func.selectFilter(item, that.props.loc)}>{item}</div>;
				}

			}
			return	<div className={styles.tag} key={index} 
			onClick={() => that.props.func.selectFilter(item, that.props.loc)}>{item}</div>
			});
		return (
			<div className={styles.div}>
				<div className={styles.filter}> filter{'(' + this.props.filter.length +')'}: </div> {tags} 
				<img className={styles.img} src='./assets/refresh.png' onClick={() => this.props.func.refresh(this.props.loc) }/>
			</div>

		);
	}
}