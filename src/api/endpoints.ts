/**    CORS ISSUE
The gist server is not allow requests from localhost:5173... so this is a deadend for now
*/

/*
export const gistId = '23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823';

export async function fetchGistData(gistId: any) {
    const response = await fetch(`https://api.githubusercontent.com/jherr/${gistId}/pokemon.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch Gist data');
    }
    const gistData = await response.json();
    return gistData.files['data.json'].content;
  }
*/
