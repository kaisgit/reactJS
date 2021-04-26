import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = endpoint => {
	const [data, setData] = useState([]); // initial state empty array

	//to call when component is mounted
	//useEffect() needs 2nd parameter [] or will run endlessly, check json server console.
	useEffect(() => {
		getData()
	}, [])

	const getData = async() => {
		const response = await axios.get(endpoint)
		setData(response.data)
	}
	return data;
}

export default useAPI;
