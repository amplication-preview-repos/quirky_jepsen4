/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StarWhereInput } from "./StarWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StarOrderByInput } from "./StarOrderByInput";

@ArgsType()
class StarFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StarWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StarWhereInput, { nullable: true })
  @Type(() => StarWhereInput)
  where?: StarWhereInput;

  @ApiProperty({
    required: false,
    type: [StarOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StarOrderByInput], { nullable: true })
  @Type(() => StarOrderByInput)
  orderBy?: Array<StarOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StarFindManyArgs as StarFindManyArgs };
