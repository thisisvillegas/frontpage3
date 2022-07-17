// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LinkList } = initSchema(schema);

export {
  LinkList
};