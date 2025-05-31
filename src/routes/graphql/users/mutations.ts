import { GraphQLNonNull } from 'graphql';
import { Static } from '@sinclair/typebox';

import { ChangeUserInput, CreateUserInput, UserType } from '../types/users.js';
import { Context, idField } from '../types/common.js';
import { createUserSchema } from '../../users/schemas.js';
import { UUIDType } from '../types/uuid.js';

export const UserMutations = {
  createUser: {
    type: new GraphQLNonNull(UserType),
    args: { dto: { type: CreateUserInput } },
    resolve: async (
      _: unknown,
      { dto: data }: { dto: Static<(typeof createUserSchema)['body']> },
      { db }: Context,
    ) => {
      return await db.user.create({ data });
    },
  },
  changeUser: {
    type: new GraphQLNonNull(UserType),
    args: { ...idField, dto: { type: ChangeUserInput } },
    resolve: async (
      _: unknown,
      { id, dto: data }: { id: string; dto: Static<(typeof createUserSchema)['body']> },
      { db }: Context,
    ) => {
      return await db.user.update({ where: { id }, data });
    },
  },
  deleteUser: {
    type: UUIDType,
    args: { ...idField },
    resolve: async (_: unknown, { id }: { id: string }, { db }: Context) => {
      await db.user.delete({ where: { id: id } });
      return id;
    },
  },
  subscribeTo: {
    type: UUIDType,  // Return UUID of the author being subscribed to
    args: { userId: { type: UUIDType }, authorId: { type: UUIDType } },
    resolve: async (_: unknown, { userId, authorId }: { userId: string; authorId: string }, { db }: Context) => {
      try {
        // Ensure the user is subscribed
        await db.user.update({
          where: { id: userId },
          data: {
            userSubscribedTo: {
              create: { authorId },
            },
          },
        });
  
        // Return the UUID of the author after subscribing
        return authorId;
      } catch (error) {
        throw new Error('Error subscribing user');
      }
    },
  },
  
  unsubscribeFrom: {
    type: UUIDType,  // Return UUID of the author being unsubscribed from
    args: { userId: { type: UUIDType }, authorId: { type: UUIDType } },
    resolve: async (_: unknown, { userId, authorId }: { userId: string; authorId: string }, { db }: Context) => {
      try {
        // Ensure the subscription is removed
        await db.subscribersOnAuthors.delete({
          where: {
            subscriberId_authorId: {
              subscriberId: userId,
              authorId,
            },
          },
        });
  
        // Return the UUID of the author after unsubscribing
        return authorId;
      } catch (error) {
        throw new Error('Error unsubscribing user');
      }
    },
  }
}