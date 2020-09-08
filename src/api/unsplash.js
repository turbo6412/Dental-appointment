import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID m5eZH94bejZjTo9V6T3jooSf6gr_1lCn7ESZTmggAD0'
	}
});
