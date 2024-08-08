'use server';

import { nanoid } from 'nanoid';
import { liveblocks } from '../liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';

export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = {
      createdrId: userId,
      email,
      title: 'Untitled',
    };

    const usersAccesses: RoomAccesses = {
      [email]: ['room:write'],
    };

    const room = await liveblocks.createRoom(userId, {
      metadata,
      usersAccesses,
      defaultAccesses: [],
    });

    revalidatePath('/');

    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened ahile creating a room: ${error}`);
  }
};
