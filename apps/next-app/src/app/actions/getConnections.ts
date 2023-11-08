import axios from "axios";
import {PaginationDto} from '@generated/api'

export async function getConnections() {

  const res = await axios.get<PaginationDto>('http://localhost:4002/api/connections')
  console.log(res, "RES")
  return res
}
