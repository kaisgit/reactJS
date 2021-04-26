import React, { useContext } from "react";
import { UserContext } from "../index";

const Main = () => {
	const user = useContext(UserContext);
	return (
		<div>
			<h5><u>In useContext/Main.js</u></h5>

			Hello { user }
		</div>
	);
};

export default Main;
