import { SortOrder } from "../../util/SortOrder";

export type ReadHistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
