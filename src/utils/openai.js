import OpenAI from 'openai';
import { openaiapikey } from './constants';
const openaI = new OpenAI({
  apiKey: openaiapikey,// This is the default and can be omitted
  dangerouslyAllowBrowser: true, 
});

export default openaI;