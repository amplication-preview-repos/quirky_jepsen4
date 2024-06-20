import { Collection as TCollection } from "../api/collection/Collection";

export const COLLECTION_TITLE_FIELD = "id";

export const CollectionTitle = (record: TCollection): string => {
  return record.id?.toString() || String(record.id);
};
