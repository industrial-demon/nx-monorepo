import { Meta, StoryObj } from "@storybook/react";
import { GhostDropdown } from "./GhostDropdown";

const meta: Meta<typeof GhostDropdown> = {
  component: GhostDropdown,
};

export default meta;

type Story = StoryObj<typeof GhostDropdown>;

export const Default: Story = {
  args: {},
};
