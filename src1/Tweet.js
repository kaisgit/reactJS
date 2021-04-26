import React from 'react';
import ReactDOM from 'react-dom';
import './Tweet.css';

import moment from 'moment';
import PropTypes from 'prop-types';

function Tweet({ tweet }) {
	return (
		<div className="tweet">
			<Avatar hash={tweet.gravatar}/>
			<div className="content">
				<Author author={tweet.author}/>
				<Time time={tweet.timestamp}/>
				<Message text={tweet.message}/>
				<div className="buttons">
					<ReplyButton/>
					<RetweetButton count={tweet.retweets}/>
					<LikeButton count={tweet.likes}/>
					<MoreOptionsButton/>
				</div>
			</div>
		</div>
	);
};
// DRY Don't Repeat Yourself - No need to duplicate props validation in this parent 'Tweet' component because each individual component already has props validation. This is just for demonstration only. Use either parent props validation or individual component props validation but not both.
Tweet.propTypes = {
	tweet: PropTypes.shape({
		message: PropTypes.string,
		gravatar: PropTypes.string,
		author: PropTypes.shape ({
			name: PropTypes.string.isRequired,
			handle: PropTypes.string.isRequired
		}).isRequired,
		likes: PropTypes.number,
		retweet: PropTypes.number,
		timestamp: PropTypes.string
	})
}

const testTweet = {
	message: "Something about cats.",
	gravatar: "xyz",
	author: {
		name: "IAMA Cat Person",
		handle: "catperson"
	},
	likes: 2,
	retweets: 17,
	timestamp: "2019-01-01 21:24:37"
};

function Avatar({ hash }) {
	const url = `https://www.gravatar.com/avatar/${hash}`;
	return (
		<img src={url} className="avatar" alt="avatar" />
	);
}
Avatar.propTypes = {
	hash: PropTypes.string
};

function Message({ text }) {
	return (
		<div className="message">{text}</div>
	);
}
Message.propTypes = {
	text: PropTypes.string
};

function Author({ author }) {
	const {name,handle} = author;
	return (
		<span className="author">
			<span className="name"> {name} </span>
			<span className="handle"> @{handle} </span>
		</span>
	);
}
Author.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		handle: PropTypes.string.isRequired
	}).isRequired
}

const Time = ({ time }) => {
	const timeString = moment(time).fromNow();
	return (
		<span className="time"> {timeString} </span>
	);
};
Time.propTypes = {
	time: PropTypes.string
};

const ReplyButton = () => (
	<i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
	if (count>0) {
		return (
			<span className="retweet-count"> {count} </span>
		)
	} else {
		return null;
	}
}
const RetweetButton = ({ count }) => (
	<span className="retweet-button">
		<i className="fa fa-retweet"/> {getRetweetCount(count)}
	</span>
);	
RetweetButton.propTypes = {
	count: PropTypes.number
};

const LikeButton = ({ count }) => (
	<span className="like-button">
		<i className="fa fa-heart"/>
			{ count > 0 &&
				<span className="like-count"> {count} </span> }
	</span>
);
LikeButton.propTypes = {
	count: PropTypes.number
};

const MoreOptionsButton = () => (
	<i className="fa fa-ellipsis-h more-options-button"/>
);


{ /*
ReactDOM.render(<Tweet tweet={testTweet}/>,
	document.querySelector('#root'));
*/ }


export default Tweet;
