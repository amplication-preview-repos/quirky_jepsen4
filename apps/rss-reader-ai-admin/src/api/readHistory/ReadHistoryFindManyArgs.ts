import { ReadHistoryWhereInput } from "./ReadHistoryWhereInput";
import { ReadHistoryOrderByInput } from "./ReadHistoryOrderByInput";

export type ReadHistoryFindManyArgs = {
  where?: ReadHistoryWhereInput;
  orderBy?: Array<ReadHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
