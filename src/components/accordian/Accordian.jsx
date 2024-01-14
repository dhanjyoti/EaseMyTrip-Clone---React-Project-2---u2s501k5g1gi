import React from "react";
import classNames from "classnames";
import * as Acd from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = ({
  title,
  content,
  content1,
  content2,
  defaultOpen,
  value,
}) => (
  <Acd.Root
    className="outline-none w-full py-5"
    type="single"
    defaultValue={defaultOpen ? value : ""}
    collapsible
  >
    <AccordionItem value={value || "item-1"}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  </Acd.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Acd.Item
      className={classNames("outline-none w-full", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Acd.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Acd.Header className="flex">
      <Acd.Trigger
        className={classNames(
          "flex flex-row justify-between items-center group outline-none w-full font-bold",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Acd.Trigger>
    </Acd.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Acd.Content
      className={classNames(
        "w-full data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5 text-sm">{children}</div>
    </Acd.Content>
  )
);

export default Accordion;
