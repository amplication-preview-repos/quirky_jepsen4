import { StarWhereInput } from "./StarWhereInput";
import { StarOrderByInput } from "./StarOrderByInput";

export type StarFindManyArgs = {
  where?: StarWhereInput;
  orderBy?: Array<StarOrderByInput>;
  skip?: number;
  take?: number;
};
