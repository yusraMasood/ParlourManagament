// minlength: 4; maxlength: 4; required: digit; // sms verification rule
import {
  dataToQueryParameter,
  getConfigs,
  getMessage,
  handleResponse,
  performNetworkRequest,
} from './HelperFunction';
import {base_url} from './configs';
export const post = async (endpoint, body, formData, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);

  const configs = getConfigs('POST', body, formData);

  console.log('== configs ', configs);
  console.log('== url ', url);

  try {
    const networkResult = await performNetworkRequest(url, configs);
    console.log('network resuklt', networkResult);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    console.log('e == ', e);
    const message = getMessage(e);
    return Promise.reject(message);
  }
};
export const get = async (endpoint, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('GET');

  console.log(
    'url ',
    url,
    '  dataToQueryParameter(queryParams) ',
    dataToQueryParameter(queryParams),
  );

  try {
    // console.log('sjosyosyoso');
    const networkResult = await performNetworkRequest(url, configs);
    console.log('NETWORK RESULT ', networkResult);
    const result = await handleResponse(networkResult);
    console.log('RESULT', result);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};
export const put = async (endpoint, body, formData, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('PUT', body, formData);
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);
    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};
export const deleteRequest = async (endpoint, queryParams) => {
  console.log('queryParams', queryParams);
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  // console.log("url",url);
  console.log(
    'url ',
    url,
    '  dataToQueryParameter(queryParams) ',
    dataToQueryParameter(queryParams),
  );

  const configs = getConfigs('DELETE');
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);
    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

const Api = {
  post: post,
  get: get,
  put: put,
  delete: deleteRequest,
};
export default Api;
