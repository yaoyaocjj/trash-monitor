import axios from 'axios';

export default function getData() {
  return axios.get('http://10.205.21.135:8080/mock/data')
}
