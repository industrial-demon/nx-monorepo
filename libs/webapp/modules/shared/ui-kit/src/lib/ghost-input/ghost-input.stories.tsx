import { Meta, StoryObj } from "@storybook/react";
import { GhostInput } from "./ghost-input";

const meta: Meta<typeof GhostInput> = {
  component: GhostInput,
};

export default meta;

type Story = StoryObj<typeof GhostInput>;

export const Default: Story = {
  args: {
    label: "Specify",
    required: true,
  },
};

export const Error: Story = {
  args: {
    label: "Specify",
    invalid: true,
    helpText: "This field is required",
    required: true,
  },
};
