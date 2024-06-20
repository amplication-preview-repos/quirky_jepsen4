import { ReadItemWhereInput } from "./ReadItemWhereInput";
import { ReadItemOrderByInput } from "./ReadItemOrderByInput";

export type ReadItemFindManyArgs = {
  where?: ReadItemWhereInput;
  orderBy?: Array<ReadItemOrderByInput>;
  skip?: number;
  take?: number;
};
