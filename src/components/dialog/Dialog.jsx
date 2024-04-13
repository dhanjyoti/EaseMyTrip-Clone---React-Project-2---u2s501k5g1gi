import React from "react";
import * as DialogP from "@radix-ui/react-dialog";
import classNames from "classnames";

const Dialog = ({ title, content, open, openChange, className }) => (
  <DialogP.Root open={open} onOpenChange={openChange}>
    <DialogP.Portal>
      <DialogP.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
      <DialogP.Content
        className={classNames(
          "overflow-y-scroll max-h-[90vh] z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-fit translate-x-[-50%] translate-y-[-50%] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
          className
        )}
      >
        <DialogP.Title className="text-mauve12 m-0 text-[17px] font-medium">
          {title}
        </DialogP.Title>
        {content}
        {/* <div className="mt-[25px] flex justify-end">
          <DialogP.Close asChild>
            <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Save changes
            </button>
          </DialogP.Close>
        </div>
        <DialogP.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </DialogP.Close> */}
      </DialogP.Content>
    </DialogP.Portal>
  </DialogP.Root>
);

export default Dialog;
