import axios from 'axios';

export async function fetchData(email) {
  const response = await axios.get('https://localhost:7153/api/jobs/user/${email} ',{
  params:{pageNo:1},});
  return response.data;
}
