import { ReadLater as TReadLater } from "../api/readLater/ReadLater";

export const READLATER_TITLE_FIELD = "id";

export const ReadLaterTitle = (record: TReadLater): string => {
  return record.id?.toString() || String(record.id);
};
