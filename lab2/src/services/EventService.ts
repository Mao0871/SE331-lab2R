import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Mao0871/SE331-Lab2.1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent() {
    return apiClient.get('/events')
  },
  getEvent(id: number){
    return apiClient.get('/events'+id)
  }
}
