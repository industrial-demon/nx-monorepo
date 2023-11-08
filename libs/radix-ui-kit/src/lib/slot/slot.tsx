import React, { FC, ReactElement, ReactNode } from 'react';

type Children = ReactElement | ReactElement[] | ReactNode | ReactNode[];

export interface SlotProps {
  name: string;
  children: Children;
}

export const Slot: FC<SlotProps> = ({ children }: { children: Children }) => <>{children}</>;

export function getSlots(names: string[], children: Children): Array<React.ReactElement | null> {
  return names.map(name => {
    let slot = null;
    React.Children.forEach(children, child => {
      if (!React.isValidElement(child)) {
        return;
      }
      if (child.type === Slot && (child.props as SlotProps).name === name) {
        slot = React.cloneElement(child);
      }
    });
    return slot;
  });
}

// usage

{
  /* <MyLayout>
  <Slot name="header">Hello World</Slot>
  <Slot name="body"></Slot>
  <Slot name="footer"></Slot>
</MyLayout> */
}
//If we wanted to provide stronger type feedback for available slot names:

type MyLayoutSlot = React.FC<{ name: 'header' | 'body' | 'footer' }>;

type MyLayoutComponent = React.FC & {
  Slot: MyLayoutSlot;
  children: Children;
};

/* 
Base example not tested yet
 */

const MyLayout = ({ children }: MyLayoutComponent) => {
  const [header, body, footer] = getSlots(['header', 'body', 'footer'], children);
  return (
    <>
      {header}
      {body}
      {footer}
    </>
  );
  // place elements as needed
};

MyLayout.Slot = Slot as MyLayoutSlot;
