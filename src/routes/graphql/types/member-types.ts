import {
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import { MemberTypeId } from '../../member-types/schemas.js';

export const MemberTypeIdEnum = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: {
    BASIC: { value: MemberTypeId.BASIC },
    BUSINESS: { value: MemberTypeId.BUSINESS },
  },
});

export const memberTypesIdField = {
  id: { type: new GraphQLNonNull(MemberTypeIdEnum) },
};

const memberTypesFields = {
  discount: { type: new GraphQLNonNull(GraphQLFloat) },
  postsLimitPerMonth: { type: new GraphQLNonNull(GraphQLInt) },
};

export const MemberType = new GraphQLObjectType({
  name: 'MemberType',
  fields: () => ({
    ...memberTypesIdField,
    ...memberTypesFields,
  }),
});