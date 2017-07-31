
const state = {
	welcome: {
		topMsg: 'Hello Guest!',
		middleMsg: 'I am Xiong Tang',
		lowerMsg: 'Welcome to my web resume!',
	},
	currentPage: 0,
	Nav: {
		name: 'TX',
		rightSection: [ 'Home', 'Qualification', 'Education', 'Projects', 'About me']
	},
	Body: {
		content: 
		[
		{quote: {quote: '"The import thing is not to stop questioning. </br> Curiosity has its own reason for exsiting."', by: 'Albert Einstein'},
			img: 'myPhoto.JPG',
			description: 'Hello! My name is Xiong Tang, a University of Waterloo graduate currently seeking ' +
				'new opportunities. Having completed my computer science degree, i have improved my ability to handle the stress, '+
				'to overcome various difficulties, to multitask and to work with peers.'+
				'</br>Throughout the years of studying in UWaterloo, i have developed strong programming skills in many languages such as '+
				'Javascript, Java and C++, and also gained theoretical knowledge in data structure, algorithem, object oriented programming,'+
				' design patterns and etc. Additionally, i have done many side projects after graduation to improve my coding skills and knowledge. ' + 
				'</br> I am curious, have strong desires to learn and work really hard to achieve my goals.'+
				' I love writing code that helps others and make their lives easier. I believe that life '+
				'is a process of constant learning and improving, and i am doing it!', 
			type: 'home'}
			,
		{
			list: [
			{
				name: "Programming Langauges:",
				list: [{name: 'Javascript', proficiency: 4}, {name: 'Java', proficiency: 4},
						{name: 'C++', proficiency: '4'}, {name: 'Hadoop', proficiency: 3},
						{name: 'Spark', proficiency: 3}, {name: 'SQL', proficiency: 2}]
			},
			{
				name: "Web Developing:",
				list: [{name: 'Reactjs/Redux', proficiency: 4}, {name: 'CSS/SCSS', proficiency: 4},
						{name: 'HTML', proficiency: 4} , {name: 'NodeJs', proficiency:3},
						{name: 'ExpressJs', proficiency: 3}, {name: 'Mongoose', proficiency:3},
						{name: 'AngularJs', proficiency: 3}, {name: 'Bootstrap', proficiency: 3} ]
			}, {
				name: 'Platforms and Tools',
				list: [{name: 'Mac OS' ,proficiency: 4}, {name: "Linux", proficiency: 4},
						{name: 'Windows', proficiency: 3}, {name: 'Git', proficiency: 4},
						{name: 'NPM', proficiency: 4}, {name: 'Eclipse', proficiency: 4},
						{name: 'Blender', proficiency: 3} ]
			}
			],
			type: 'Qualification'
		} ,
		{
			type: 'List1',
			list: [
				{
					name: 'University of Waterloo',
					imgSrc: 'uw.jpg',
					imgRef: 'https://uwaterloo.ca/',
					startTime: 'Sept 2012',
					endTime: 'May 2016',
					description: 'This is the place where I started my four year university life, ' + 
					'the place where i met so many important people in my life, and the place where i learned many important lessons.',
				},
				{
					name: 'Rockway Mennonite Collegiate',
					imgSrc: 'rockway.jpg',
					imgRef: 'https://rockway.ca/',
					startTime: 'Jan 2011',
					endTime: 'June 2012',
					description: 'Quite different class atmoshpere and experience. I really enjoyed studying there, hanging out with' +
					' people, going on school trips and numerous memorable moments.'
				}
			]
		},
		{	
			tags: ['C++', 'Java', 'Web'],
			filter: [],
			type: 'List2',
			list: [
				{
					name: 'Bubble-Man',
					imgSrc: "BubbleMan.png",
					imgSrc2: 'BubbleMan.gif',
					tags: ['ReactJs', 'Canvas', 'Web'],
					description: 'A bomberman like 2D arcade games written in ReactJs and HTML5 Canvas. Work in progress.',
					website: 'https://github.com/AynmShawn4/BubbleMan',
				},
				{
					name: 'HellTracker',
					imgSrc: "HellTracker.png",
					imgSrc2: 'HellTracker.gif',
					tags: ['ReactJs', 'Redux', 'NodeJs', 'ExpressJs', 'Mongoose', 'Web'],
					description: 'A single page app that is built using MERN stack. User can log in, sign in and submit data to server.',
					website: 'https://github.com/AynmShawn4/HellTracker',
				},
				{
					name: 'MyList',
					imgSrc: "MyList.png",
					imgSrc2: 'MyList.gif',
					tags: ['AngularJs', 'Bootstrap', 'Web'],
					description: 'Small web app used to keep track of films and shows watched. Work in progress.',
					website: 'https://github.com/AynmShawn4/MyList',
				},
				{
					name: 'Fotag!',
					imgSrc: "Fotag.png",
					imgSrc2: 'Fotag.gif',
					tags: ['Javascript', 'Web'],
					description: 'A web app that can display uploaded images in two different styles and can filter images by ratings.',
					website: 'https://github.com/AynmShawn4/UserInterface-JavaScript-',
				},
				{
					name: 'SpaceCraft',
					imgSrc: "SpaceCraft.png",
					imgSrc2: 'SpaceCraft.gif',
					tags: ['Javascript', 'Canvas', 'Web'],
					description: 'An interactive web app, user can control the spacecraft by using arrow keys and spacebar.',
					website: 'https://github.com/AynmShawn4/UserInterface-JavaScript-',
				},
				{
					name: 'Quadris',
					imgSrc: "Quadris.png",
					imgSrc2: 'Quadris.gif',
					tags: ['C++', 'OOP'],
					description: 'A Tetris like 2D game implemented in C++',
					website: 'https://github.com/AynmShawn4/Quadris',
				},
				{
					name: 'Lightning',
					imgSrc: "Lightning.png",
					imgSrc2: 'Lightning.gif',
					tags: ['Java', 'OOP'],
					description: 'A 2D arcade game',
					website: '',
				}
			]
		},
		{
			type: 'List3',
			list: [
				
					{imgSrc: 'basketball.jpg', description: 'I love basketball!</br> I really enjoy practicing my shots when i have free time, especially on such nice day!', type: 'l', index: 0},
					{imgSrc: 'galaxy.jpg', description: 'I love astronomy!</br> Our universe is so beautiful. I wonder whether there is someone on the other side of universe staring into night sky and wondering whether alien exists or not.', type: 's', index: 1}
				,
					{imgSrc: 'biology.jpg', description: 'I love Biology! </br> I am always fascinated by all types of beautiful animals and plants, our mother nature is indeed breathtaking. Have taken many animal and human physiology courses, i learned even more about ourselves and others. </br> ', type: 'l', index: 2},
					{imgSrc: 'piano.jpg', description: 'I love music!</br> i tought myself to play piano, even though i am still pretty bad at it, i enjoy the process of learning and being able to play the songs i like.', type: 's', index: 3}
				,
					{imgSrc: 'graduation.jpg', description: 'One of my greatest achievements, i graduated from University of Waterloo with Bachelor of Computer Science and Biology Minor.', type: 'l', index: 4},
					{imgSrc: 'vacation.jpg', description: 'On vacation with friends. Loved the weather, loved the experience and time spent with them.', type: 's', index: 5},
					{imgSrc: 'game.jpg', description: 'I love playing video games! </br> ', type: 's', index: 6},

				
			]
		}
		]
	},
	Footer:  {
		name: 'TX',
		content: [
		{	name: 'Contact: ',
			list: [{type: 'email', value: 'taxn1993@gmail.com'}]
		}
		,{
			name: 'Website: ',
			list: [{type: 'github', value:  'https://github.com/AynmShawn4'},
			]
		}
		]
	}
}

export default state;