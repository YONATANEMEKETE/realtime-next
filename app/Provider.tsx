'use client';

import React from 'react';
import { getClerkUsers } from '@/lib/actions/user.actions';
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from '@liveblocks/react/suspense';
import Loader from '@/components/Loader';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint={'/api/liveblocks-auth'}
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds });

        return users;
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
