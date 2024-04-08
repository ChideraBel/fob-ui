import { post } from 'aws-amplify/api';
import { get } from 'aws-amplify/api';
import { API_NAME } from "../Constants";

export async function getFunc(endpoint: string, parameters?: any) {
  try {
    const restOperation = get({
      apiName: API_NAME,
      path: endpoint,
      options: {
        queryParams: parameters
      }
    });
    const { body } = await restOperation.response;
    const response = await body.json();

    console.log('GET call succeeded: ', response);
    return response;
  } catch (e: any) {
    console.log('GET call failed: ', JSON.parse(e.response));
  }
}

export async function postFunc(endpoint: string, payload: any) {
  try {
    const restOperation = post({
      apiName: API_NAME,
      path: endpoint,
      options: {
        body: payload
      }
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    console.log('POST call succeeded');
    return response;
  } catch (ex: any) {
    console.log('POST call failed: ', ex);
  }
}