import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';
import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import CollaborativeRoom from '@/components/CollaborativeRoom';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getDocument } from '@/lib/actions/room.actions';

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect('/sign-in');

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) redirect('/');

  // TODO: asess the permissions

  return (
    <main className="flex w-full items-center flex-col">
      <CollaborativeRoom roomId={id} roomMetadata={room.metadata} />
    </main>
  );
};

export default Document;
