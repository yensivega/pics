import axios from 'axios';

export default axios.create( {
    baseURL :    'https://api.unsplash.com',
    headers :{
        Authorization: 'Client-ID 0890a34f123e6ef6f70c1c87d0b9f4a043b4a33e0a63bb755e096f4a702af30f'
    }
});