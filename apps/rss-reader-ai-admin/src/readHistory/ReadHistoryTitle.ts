import { ReadHistory as TReadHistory } from "../api/readHistory/ReadHistory";

export const READHISTORY_TITLE_FIELD = "id";

export const ReadHistoryTitle = (record: TReadHistory): string => {
  return record.id?.toString() || String(record.id);
};
