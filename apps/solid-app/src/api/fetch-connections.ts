const BASE_URL = 'http://localhost:4002/api'
import axios from 'axios'
import { createMutable } from 'solid-js/store'
export const fetchConnectionList = async () =>
createMutable((await axios.get(`${BASE_URL}/connections`)).data)

  