import React from 'react';
import Edu from './ListComponents/EducationType.jsx';
import Component1 from './ListComponents/ListComponent2.jsx';
import PhotoComp from './PhotoComponent.jsx';
import Filter from './Filter.jsx';
import styles from '../../style/ListContainStyle.scss';

export default class ListContain extends React.Component {
	constructor(props){
		super(props);
		this.switchType = this.switchType.bind(this);
	}
	switchType(type){
		switch (type) {
			case 1:    //education type
				const schools = this.props.data.map((item, index) => (
					<Edu key={index} data={item} />
				));
				return schools;
			case 2:  //project type
				var that = this;
				const projects = this.props.data.map(function(item, index){
					var ret = <Component1 key={index} data={item} />;
					for (let i = 0; i < that.props.filter.length; i++){
						ret = null;
						for (let j = 0; j < item.tags.length; j++){
							if (that.props.filter[i] === item.tags[j] ){
								return <Component1 key={index} data={item} />;
							}
						}
					}
					return	ret;
				});
				return projects;
			case 3: //photo type
				return	<PhotoComp data={this.props.data} />
		}
	}

	render() {
		const result = this.switchType(this.props.type);
		return (
			<div className={styles.div}>
				{(this.props.type === 2 ? <Filter tags={this.props.tags} filter={this.props.filter}
				 func={this.props.func} loc={this.props.loc}/> : null)}
				{result}
			</div>
		);
	}
}