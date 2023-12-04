import React from 'react';
import * as PopoverP from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';

const Popover = ({trigger, children}) => (
  <PopoverP.Root>

    <PopoverP.Trigger asChild>
    {trigger}
    </PopoverP.Trigger>
    <PopoverP.Portal>
      <PopoverP.Content
        className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
      >
        {children}
{/*         
        <PopoverP.Close
          className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
          aria-label="Close"
        >
          <Cross2Icon />
        </PopoverP.Close>
        <PopoverP.Arrow className="fill-white" /> */}
      </PopoverP.Content>
    </PopoverP.Portal>
  </PopoverP.Root>
);

export default Popover;