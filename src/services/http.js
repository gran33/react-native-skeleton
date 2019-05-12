import _ from 'lodash';

export async function get(url, extraHeaders) {
  return await performFetch({method: 'GET', url, extraHeaders});
}

export async function getWithParams(url, queryParams, extraHeaders) {
  return await performFetch({method: 'GET', url, extraHeaders, queryParamsObject: queryParams});
}

export async function post(url, extraHeaders, body) {
  return await performFetch({method: 'POST', url, extraHeaders, body});
}

async function performFetch({method, url, extraHeaders, body = undefined, queryParamsObject = undefined}) {

  if (queryParamsObject) {
    const queryParams = convertObjectToQueryParams(queryParamsObject);
    url = `${url}${queryParams}`;
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const response = await fetch(url, {
    method,
    headers: _.merge(headers, extraHeaders),
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new HttpError(`failed for ${url}, status ${response.status}`, response.status);
  }
  return await response.json();
}

function convertObjectToQueryParams(obj) {
  return Object
    .keys(obj)
    .map((key) => obj[key] === undefined ? null : `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .filter((item) => item !== null)
    .join('&');
}

export class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}
