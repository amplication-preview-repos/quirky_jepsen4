import { ReadLaterWhereInput } from "./ReadLaterWhereInput";
import { ReadLaterOrderByInput } from "./ReadLaterOrderByInput";

export type ReadLaterFindManyArgs = {
  where?: ReadLaterWhereInput;
  orderBy?: Array<ReadLaterOrderByInput>;
  skip?: number;
  take?: number;
};
