import React from 'react';
import * as HoverCardP from '@radix-ui/react-hover-card';

const HoverCard = ({trigger, children}) => (
  <HoverCardP.Root openDelay={100}>
    <HoverCardP.Trigger asChild>
     {trigger}
    </HoverCardP.Trigger>
    <HoverCardP.Portal>
      <HoverCardP.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        {children}
      </HoverCardP.Content>
    </HoverCardP.Portal>
  </HoverCardP.Root>
);

export default HoverCard;