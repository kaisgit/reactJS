import React from 'react';
import ReactDOM from 'react-dom';
import './Envelope.css';

import PropTypes from 'prop-types';

function Envelope({ addressfrom, addressto }) {
	return (
		<div className="box">
			<FromName fullname={addressfrom.fullname}/>
			<FromAddress address={addressfrom.address}/>
			<FromCity city={addressfrom.city}/>
			<FromState state={addressfrom.state}/>
			<FromZipcode zipcode={addressfrom.zip}/>
			<div className="to">
				<FromName fullname={addressto.fullname}/>
				<FromAddress address={addressto.address}/>
				<FromCity city={addressto.city}/>
				<FromState state={addressto.state}/>
				<FromZipcode zipcode={addressto.zip}/>
			</div>
		</div>
	);
};
Envelope.propTypes = {
   addressfrom: PropTypes.shape({
      fullname: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string
   })
}

{ /*
const fromPerson = {
	fullname: "Mr. Sender",
	address: "123 Fake St.",
	city: "Boston",
	state: "MA",
	zip: "02118"
};
const toPerson = {
	fullname: "Mrs. Receiver",
	address: "123 Fake St.",
	city: "San Francisco",
	state: "CA",
	zip: "94101"
};
*/ }

function FromName({ fullname }) {
   return (
      <div>{fullname}</div>
   );
}
function FromAddress({ address }) {
   return (
      <div>{address}</div>
   );
}
function FromCity({ city }) {
   return (
      <span>{city} </span>
   );
}
function FromState({ state }) {
   return (
      <span>{state}, </span>
   );
}
function FromZipcode({ zipcode }) {
   return (
      <span>{zipcode}</span>
   );
}

{ /*
ReactDOM.render(
   <Envelope addressfrom={fromPerson}
             addressto={toPerson}/>,
	document.querySelector('#root'));
*/ }

export default Envelope;
