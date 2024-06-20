import { SortOrder } from "../../util/SortOrder";

export type ReadLaterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
