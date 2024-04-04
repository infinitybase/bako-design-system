import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "node:path";

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@chakra-ui/storybook-addon"),
  ],
  framework: {
    // @ts-ignore
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    // @ts-ignore
    emotionAlias: false,
  },
};
export default config;
