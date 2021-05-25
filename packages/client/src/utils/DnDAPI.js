import { settings } from '../private/dev/settings';
import { requestPromise } from './requestPromise';
import { REQUEST_METHODS } from '../infra/utils/constants';

const requestToDnD = async ({ path, method = REQUEST_METHODS.GET }) => {
  const url = `${settings.dnd.apiPath}${path}`;
  try {
    const response = await requestPromise({ url, method });
    return JSON.parse(response.body);
  } catch (error) {
    console.error('error trying get response of the  nd api');
    throw new Error(error);
  }
};

export const DnD_API = {
  getSpells: async ({ value }) =>
    requestToDnD({ path: `/spells/?name=${value}` }),

  getClasses: async ({ value }) =>
    requestToDnD({ path: `/spells/?name=${value}` }),

  getFeatures: async ({ value }) =>
    requestToDnD({ path: `/features/?name=${value}` }),

  getMonsters: async ({ value }) =>
    requestToDnD({ path: `/spells/?name=${value}` }),
};
