// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ColorBlock } from './ColorBlock';

const meta: Meta<typeof ColorBlock> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: ColorBlock,
};

export default meta;
type Story = StoryObj<typeof ColorBlock>;

export const Colors: Story = {
  render: () => (
    <>
      <div>
        <h3 className="text-md font-bold text-slate-500">Blue/Sky</h3>
        <div className="flex w-full gap-2 bg-slate-300 p-4">
          {/* //blue-20 */}
          <ColorBlock className={'bg-[#6E99ED]'} />
          {/* //blue-50 */}
          <ColorBlock className={'bg-[#3164C9]'} />
          {/* //blue-60 */}
          <ColorBlock className={'bg-[#304991]'} />
          {/* /blue-70 */}
          <ColorBlock className={'bg-[#24356B]'} />
          {/* /blue-90 */}
          <ColorBlock className={'bg-[#162042]'} />
        </div>
      </div>

      <div>
        <h3 className="text-md font-bold text-slate-500">Red</h3>
        <div className="flex w-full gap-2 bg-slate-300 p-4">
          {/* //red-20 */}
          <ColorBlock className={'bg-[#fd7777]'} />
          {/* //red-50 */}
          <ColorBlock className={'bg-[#E05151]'} />
          {/* //red-80 */}
          <ColorBlock className={'bg-[#DC143C]'} />
        </div>
      </div>

      <div>
        <h3 className="text-md font-bold text-slate-500">Green</h3>
        <div className="flex w-full gap-2 bg-slate-300 p-4">
          {/* //green-10 */}
          <ColorBlock className={'bg-[#D1FAE5]'} />
          {/* //green-20 */}
          <ColorBlock className={'bg-[#77DD77]'} />
          {/* //green-30 */}
          <ColorBlock className={'bg-[#52C672]'} />
          {/* //green-40 */}
          <ColorBlock className={'bg-[#34C125]'} />
          {/* //green-50 */}
          <ColorBlock className={'bg-[#1BB75A]'} />
        </div>
      </div>

      <div>
        <h3 className="text-md font-bold text-slate-500">Orange</h3>
        <div className="flex w-full gap-2 bg-slate-300 p-4">
          {/* //orange-10 */}
          <ColorBlock className={'bg-[#FCF5E5]'} />
          {/* //orange-50 */}
          <ColorBlock className={'bg-[#FF7F1F]'} />
          {/* //orange-60 */}
          <ColorBlock className={'bg-[#E7642C]'} />
        </div>
      </div>

      <div>
        <h3 className="text-md font-bold text-slate-500">Yellow</h3>
        <div className="flex w-full gap-2 bg-slate-300 p-4">
          {/* //yellow-60 */}
          <ColorBlock className={'bg-[#FFC501]'} />
        </div>
      </div>

      <div>
        <h3 className="text-md font-bold text-slate-500">Aquamarine</h3>
        <div className="flex w-full gap-2 bg-slate-300 p-4">
          {/* aquamarine-30 */}
          <ColorBlock className={'bg-[#1BBFCC]'} />
          {/* aquamarine-60 */}
          <ColorBlock className={'bg-[#15A8B2]'} />
        </div>
      </div>

      <div>
        <h3 className="text-md font-bold text-slate-500">Grey</h3>
        <div className="flex w-full gap-2 border border-slate-300 bg-white p-4">
          {/* grey-10 */}
          <ColorBlock className={'bg-[#F3F7FF]'} />
          {/*  grey-20 */}
          <ColorBlock className={'bg-[#f0f1f5]'} />
          {/*  grey-30 */}
          <ColorBlock className={'bg-[#EEEFF4]'} />
          {/*  grey-40 */}
          <ColorBlock className={'bg-[#E3E3E3]'} />
          {/*  grey-50 */}
          <ColorBlock className={'bg-[#A7AEC4]'} />
          {/*  grey-60 */}
          <ColorBlock className={'bg-[#7B7B7B]'} />
          {/*  grey-100 */}
          <ColorBlock className={'bg-[#1D1D1D]'} />
        </div>
      </div>

      <div className="bg-custom-blue-20 text-custom-red-80 p-4">test</div>
    </>
  ),
};
