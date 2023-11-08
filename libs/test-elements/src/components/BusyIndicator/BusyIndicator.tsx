import { HTMLAttributes } from 'react';
import './busyIndicator.css';

export const BusyIndicator = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div id="floatBarsG" {...props}>
      <div id="floatBarsG_1" className="floatBarsG"></div>
      <div id="floatBarsG_2" className="floatBarsG"></div>
      <div id="floatBarsG_3" className="floatBarsG"></div>
      <div id="floatBarsG_4" className="floatBarsG"></div>
      <div id="floatBarsG_5" className="floatBarsG"></div>
      <div id="floatBarsG_6" className="floatBarsG"></div>
      <div id="floatBarsG_7" className="floatBarsG"></div>
      <div id="floatBarsG_8" className="floatBarsG"></div>
    </div>
  );
};
