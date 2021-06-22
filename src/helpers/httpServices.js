/**
 * @description All the http methods are defined here
 */

const BASE_URL = 'https://api.spacexdata.com/v3/';

const GET = async ({ url }) => {
  try {
    const response = await fetch(BASE_URL + url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error(response);
  } catch (error) {
    throw new Error(error);
  }
};

export default GET;
