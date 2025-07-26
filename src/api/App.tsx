import axios from 'axios';

export function fetchAliceAPI() {
    // const apiEndpoint = process.env.ALICE_API_URL?.toString() || '';
    const apiEndpoint = ''
    if (apiEndpoint.length === 0 || !apiEndpoint) {
      console.error('No API endpoint provided');
      return;
    }
    axios.get(apiEndpoint)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error fetching data:', error));
}