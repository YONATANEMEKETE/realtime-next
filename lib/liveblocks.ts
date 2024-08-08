import { Liveblocks } from '@liveblocks/node';

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});

// 'sk_dev_LPsk4W-oi2JL4klUtcG4_5SkgItSzr_UK4C2-_FgJy0ecfn9AoGe4wEY5V4qzZjB'
