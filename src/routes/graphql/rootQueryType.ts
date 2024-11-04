import { GraphQLObjectType, GraphQLList, GraphQLNonNull } from "graphql";
import { UUIDType } from "./types/uuid.js";
import { UserQueries } from "./users/queries.js";
import { PostQueries } from "./posts/queries.js";
import { MemberTypesQueries } from "./member-types/queries.js";
import { ProfileQueries } from "./profiles/queries.js";
const RootQueryTypeCreate = new GraphQLObjectType({
  name: 'RootQueryType',
    fields: {
      ...UserQueries,
      ...PostQueries,
      ...MemberTypesQueries,
      ...ProfileQueries,
    },
})
export {RootQueryTypeCreate}