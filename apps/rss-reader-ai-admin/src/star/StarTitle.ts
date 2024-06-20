import { Star as TStar } from "../api/star/Star";

export const STAR_TITLE_FIELD = "id";

export const StarTitle = (record: TStar): string => {
  return record.id?.toString() || String(record.id);
};
