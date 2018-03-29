import React from 'react';
import ReactDOM from 'react-dom';

function getDate(date){
	return date.toLocaleDateString();
}



function InfoData(props){
	return(
    <div>
      <div><img src={props.image} /></div>
      <div>{props.img_info}</div>
      <div>To the Stars who listen and the Dreams that are answered!</div>
      <div> - {props.author}</div>
      <div>{getDate(props.date)}</div>
     </div>
		);
}

const info={
	date: new Date(),
	image: 'https://data.whicdn.com/images/299690033/large.jpg',
	img_info: 'Velaris',
	author: 'Rhysand',
};

ReactDOM.render(
	<InfoData 
		date={info.date}
		image={info.image}
		img_info={info.img_info}
		author={info.author}
	/>,document.getElementById('root')
);
