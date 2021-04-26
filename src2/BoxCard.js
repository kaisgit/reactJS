import React from 'react';

function BoxCard(props) {
	return (
		<div style={styles.boxStyle}>
			<h5><u>In BoxCar.js</u></h5>

     		{ props.children }
		</div>
	)
}

export default BoxCard;

const styles = {
   boxStyle: {
		border: '1px solid rgba(0, 0, 0, 0.05)', 
		borderColor: '#000',
		width: 200,
      height: 200,
      padding: 10,
      margin: 20,
   }
}

