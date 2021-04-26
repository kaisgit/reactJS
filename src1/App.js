import React from 'react';
import ReactDOM from 'react-dom';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import Envelope from './Envelope';
import RandomList from './ArrayHooks';
import OneTimeButton from './ClickOnceHooks'; // function hooks
import OneTimeButtonClass from './ClickOnceClass'; // class hooks
import CountingParent from './CounterConstructor';
import CountingParentNoConst from './CounterNoConstructor';
import RedditAPI from './ApiRequest';
import FileList from './GitHub';
import StepTracker from './Hooks';
import StepTracker2 from './Hooks2';
import Example from './IncrementClass';
import ExampleHooks from './IncrementHooks';
import RefInput from './InputControls';
import NestedProps from './NestedProps';
import NestedPropsContextAPI from './NestedPropsContextApi.js';
import MultiCounter from './ObjectsHooks.js';
import Tweet from './Tweet';
import LogEffect, {Reddit} from './useEffect';
import ShoppingList from './useReducer';
import Callback from './CallbackHandler';
import SearchAPI from './SearchAPI';

function App() {
	{ /* Envelope */ }
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

	{ /* GitHub */ }
	const testFiles = [
   	{
      	id: 1,
      	name: 'src',
      	type: 'folder',
      	updated_at: "2016-07-11 21:24:00",
      	latestCommit: {
         	message: 'Initial commit'
      	}
   	},
   	{
      	id: 2,
      	name: 'tests',
      	type: 'folder',
      	updated_at: "2016-07-11 21:24:00",
      	latestCommit: {
         	message: 'Initial commit'
      	}
   	},
   	{
      	id: 3,
      	name: 'README',
      	type: 'file',
      	updated_at: "2016-07-18 21:24:00",
      	latestCommit: {
         	message: 'Added a readme'
      	}
   	},
	];

	{ /* Tweet */ }
	const testTweet = {
   	message: "Something about cars.",
   	gravatar: "xyz",
   	author: {
      	name: "I'm car Person",
      	handle: "carperson"
   	},
   	likes: 2,
   	retweets: 17,
   	timestamp: "2019-01-01 21:24:37"
	};

	return (
		<div>
	   	<Envelope addressfrom={fromPerson}
                   addressto={toPerson}/>

			<hr />
			<RandomList />

			<hr />
			<OneTimeButton onClick={() => alert("hi")} /><br />
			<OneTimeButtonClass onClick={() => alert("hi")} />

			<hr />
			<CountingParent />
			<hr />
			<CountingParentNoConst />

         <hr />
         <HashRouter>
            <NavLink to="/callback">Callback Handler</NavLink>
            <div>
               <Route path="/callback" component={Callback} />
            </div>
         </HashRouter>

         <hr />
         <HashRouter>
            <NavLink to="/search">Search API</NavLink>
            <div>
               <Route path="/search" component={SearchAPI} />
            </div>
         </HashRouter>

         <hr />
         <HashRouter>
            <NavLink to="/redditapi">Reddit JSON API</NavLink>
            <div>
               <Route path="/redditapi"  render={()=>
                              <RedditAPI subreddit="reactjs" /> } />
            </div>
         </HashRouter>

			<hr />
         <HashRouter>
            <NavLink to="/github">GitHub</NavLink>
            <div>
               <Route exact path="/github" render={()=>
                              <FileList files={testFiles} /> } />
            </div>
         </HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/hooks">StepTracker</NavLink>
				<div>
					<Route path="/hooks" component={StepTracker} />
				</div>
			</HashRouter>

         <hr />
         <HashRouter>
            <NavLink to="/hooks2">StepTracker 2</NavLink>
            <div>
               <Route path="/hooks2" component={StepTracker2} />
            </div>
         </HashRouter>

         <hr />
         <HashRouter>
            <NavLink to="/objhooks">Object Hooks</NavLink>
            <div>
               <Route path="/objhooks" component={MultiCounter} />
            </div>
         </HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/example">Increment (Class)</NavLink>
				<div>
					<Route path="/example" component={Example} />
				</div>
			</HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/examplehooks">Increment (Hooks)</NavLink>
				<div>
					<Route path="/examplehooks" component={ExampleHooks} />
				</div>
			</HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/refinput">Input</NavLink>
				<div>
					<Route path="/refinput" component={RefInput} />
				</div>
			</HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/nestedprops">Nested Props</NavLink>
				<div>
					<Route path="/nestedprops" component={NestedProps} />
				</div>
			</HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/nestedpropscontext">Nested Props Context API</NavLink>
				<div>
					<Route path="/nestedpropscontext" component={NestedPropsContextAPI} />
				</div>
			</HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/tweet">Tweet</NavLink>
				<div>
               <Route exact path="/tweet" render={()=>
                              <Tweet tweet={testTweet} /> } />
				</div>
			</HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/useeffect">useEffect (Check console.log)</NavLink>
				<div>
					<Route path="/useeffect" component={LogEffect} />
				</div>
			</HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/reddit">useEffect (fetching json data)</NavLink>
				<div>
					<Route path="/reddit" component={Reddit} />
				</div>
			</HashRouter>

			<hr />
			<HashRouter>
				<NavLink to="/shopping">Shopping List (useReducer)</NavLink>
				<div>
					<Route path="/shopping" component={ShoppingList} />
				</div>
			</HashRouter>


		</div>
	)
}

export default App;
