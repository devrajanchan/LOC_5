import axios from 'axios';

export async function fetchData(email) {
  const response = await axios.get('https://localhost:7153/api/jobs/user/user1@example.com',{
  params:{pageNo:1},});
  console.log(response.data);
  return response.data;
}
