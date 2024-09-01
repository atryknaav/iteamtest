import axios from 'axios';

export const fetcher = async (query: string) => {
  const MAX_RETRIES = 1;
  let attempt = 0;
  while (attempt < MAX_RETRIES) {
    try {
      const response = await axios.request({
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/job-details',
        params: {
          job_id: query,
          extended_publisher_details: 'false'
        },
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      });
      return response.data.data[0];
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 429) {
   
        await new Promise(res => setTimeout(res, 1000 * Math.pow(2, attempt)));
        attempt++;
      } else {
     
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`);
        }
        throw error;
      }
    }
  }
  throw new Error('Maximum retries reached');
};
