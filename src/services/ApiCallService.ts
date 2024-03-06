import { post } from 'aws-amplify/api';
import { get } from 'aws-amplify/api';
import { API_BASE_URL, API_NAME } from "../Constants";
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

const existingConfig = Amplify.getConfig();

Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      "FOB API": {
        endpoint: API_BASE_URL,
        region: 'us-east-2'
      }
    }
  }
});

export async function getFunc(endpoint: string, parameters: any) {
  try {
    const restOperation = get({
      apiName: API_NAME,
      path: endpoint,
      options: {
        queryParams: parameters
      }
    });
    const response = await restOperation.response;

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