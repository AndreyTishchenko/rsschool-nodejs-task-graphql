import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { UUIDType } from './types/uuid.js';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { FastifyInstance, RawServerDefault, FastifyBaseLogger } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { CreateUserInput } from './types/users.js';
        const Mutations = new GraphQLObjectType(
        {
            name: 'Mutations',
            fields: {
              createUser: {
                type: GraphQLString,
                args: { dto: { type: new GraphQLNonNull(CreateUserInput) } },
              },
              // createProfile: {
              //   type: new GraphQLNonNull(Profile),
              //   args: { dto: { type: new GraphQLNonNull(CreateProfileInput) } },
              //   resolve: (parent, { dto }, context) => {
              //     return context.prisma.profile.create({ data: dto });
              //   },
              // },
              // createPost: {
              //   type: new GraphQLNonNull(Post),
              //   args: { dto: { type: new GraphQLNonNull(CreatePostInput) } },
              //   resolve: (parent, { dto }, context) => {
              //     return context.prisma.post.create({ data: dto });
              //   },
              // },
              // changePost: {
              //   type: new GraphQLNonNull(Post),
              //   args: {
              //     id: { type: new GraphQLNonNull(UUIDType) },
              //     dto: { type: new GraphQLNonNull(ChangePostInput) },
              //   },
              //   resolve: (parent, { id, dto }, context) => {
              //     return context.prisma.post.update({ where: { id }, data: dto });
              //   },
              // },
              // changeProfile: {
              //   type: new GraphQLNonNull(Profile),
              //   args: {
              //     id: { type: new GraphQLNonNull(UUIDType) },
              //     dto: { type: new GraphQLNonNull(ChangeProfileInput) },
              //   },
              //   resolve: (parent, { id, dto }, context) => {
              //     return context.prisma.profile.update({ where: { id }, data: dto });
              //   },
              // },
              // changeUser: {
              //   type: new GraphQLNonNull(User),
              //   args: {
              //     id: { type: new GraphQLNonNull(UUIDType) },
              //     dto: { type: new GraphQLNonNull(ChangeUserInput) },
              //   },
              //   resolve: (parent, { id, dto }, context) => {
              //     return context.prisma.user.update({ where: { id }, data: dto });
              //   },
              // },
              // deleteUser: {
              //   type: new GraphQLNonNull(GraphQLString),
              //   args: { id: { type: new GraphQLNonNull(UUIDType) } },
              //   resolve: (parent, { id }, context) => {
              //     return context.prisma.user.delete({ where: { id } }).then(() => `User ${id} deleted.`);
              //   },
              // },
              // deletePost: {
              //   type: new GraphQLNonNull(GraphQLString),
              //   args: { id: { type: new GraphQLNonNull(UUIDType) } },
              //   resolve: (parent, { id }, context) => {
              //     return context.prisma.post.delete({ where: { id } }).then(() => `Post ${id} deleted.`);
              //   },
              // },
              // deleteProfile: {
              //   type: new GraphQLNonNull(GraphQLString),
              //   args: { id: { type: new GraphQLNonNull(UUIDType) } },
              //   resolve: (parent, { id }, context) => {
              //     return context.prisma.profile.delete({ where: { id } }).then(() => `Profile ${id} deleted.`);
              //   },
              // },
              // subscribeTo: {
              //   type: new GraphQLNonNull(GraphQLString),
              //   args: {
              //     userId: { type: new GraphQLNonNull(UUIDType) },
              //     authorId: { type: new GraphQLNonNull(UUIDType) },
              //   },
              //   resolve: async (parent, { userId, authorId }) => {
              //     // Implement subscription logic
              //     // e.g., update user's subscribedToUser list
              //     return `Subscribed user ${userId} to ${authorId}`;
              //   },
              // },
              // unsubscribeFrom: {
              //   type: new GraphQLNonNull(GraphQLString),
              //   args: {
              //     userId: { type: new GraphQLNonNull(UUIDType) },
              //     authorId: { type: new GraphQLNonNull(UUIDType) },
              //   },
              //   resolve: async (parent, { userId, authorId }) => {
              //     // Implement unsubscription logic
              //     return `Unsubscribed user ${userId} from ${authorId}`;
              //   },
              // },
            }
        }        );
export {Mutations}