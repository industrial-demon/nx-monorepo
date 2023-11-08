import { mergeConfig } from 'vite';
import path from 'path';

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/webapp/modules/shared/ui-kit/vite.config.ts',
      },
    },
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@webapp/icons': path.resolve(
            __dirname,
            '../../icons/src/index.ts'
          ),
          '@webapp/mobx-models': path.resolve(
            __dirname,
            '../../mobx-models/src/index.ts'
          ),
        },
      },
    });
  },
};
export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
