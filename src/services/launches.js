import * as Http from './http';
import CONFIG from '../Config';

export const ERRORS = {
  FAILED_TO_FETCH_LAUNCHES_LIST_API: 'Failed to fetch launches list - API Error',
};

export async function getLaunches({limit} = {}) {
  const url = limit === 0 ? CONFIG.endpoints['get-empty-launches'] : CONFIG.endpoints['get-launches'];
  try {
    const response = await Http.get(url);
    return response.rockets;
  } catch (err) {
    console.log('ERROR', ERRORS.FAILED_TO_FETCH_LAUNCHES_LIST_API);
    throw new Error(ERRORS.FAILED_TO_FETCH_LAUNCHES_LIST_API);
  }
}
