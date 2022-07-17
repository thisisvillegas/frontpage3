import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LinkListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class LinkList {
  readonly id: string;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly column?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LinkList, LinkListMetaData>);
  static copyOf(source: LinkList, mutator: (draft: MutableModel<LinkList, LinkListMetaData>) => MutableModel<LinkList, LinkListMetaData> | void): LinkList;
}