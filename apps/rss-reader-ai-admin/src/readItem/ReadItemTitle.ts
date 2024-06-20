import { ReadItem as TReadItem } from "../api/readItem/ReadItem";

export const READITEM_TITLE_FIELD = "id";

export const ReadItemTitle = (record: TReadItem): string => {
  return record.id?.toString() || String(record.id);
};
