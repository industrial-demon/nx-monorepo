import { ReactElement, ReactInstance, useRef } from 'react';

import ReactToPrint from 'react-to-print';

type Props = {
  trigger: ReactElement;
};

export const usePrint = <TRef extends ReactInstance>({ trigger }: Props) => {
  const componentToPrintRef = useRef<TRef>(null);
  return {
    trigger: <ReactToPrint trigger={() => trigger} content={() => componentToPrintRef.current} />,
    componentToPrintRef,
  };
};
