import axios from 'axios';
import { getCookie } from './helpers';
import { Range } from './components';

// axios.defaults.headers.common['Authorization'] = getCookie();
axios.defaults.headers.common['mode'] = 'cors';
axios.defaults.headers.common['content-type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const baseURL = 'http://localhost:8000';

export type GetClipsParameters = {
  period: Range;
  cursor: string | null;
};

export const getClips = (params: GetClipsParameters) => {
  return axios.get(`${baseURL}/clips`, { params });
};
