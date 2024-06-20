import { StarWhereInput } from "./StarWhereInput";

export type StarListRelationFilter = {
  every?: StarWhereInput;
  some?: StarWhereInput;
  none?: StarWhereInput;
};
