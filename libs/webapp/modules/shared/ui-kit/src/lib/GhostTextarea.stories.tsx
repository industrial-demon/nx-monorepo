import { Meta, StoryObj } from "@storybook/react";
import { GhostTextarea } from "./GhostTextarea";

const meta: Meta<typeof GhostTextarea> = {
  component: GhostTextarea,
};

export default meta;

type Story = StoryObj<typeof GhostTextarea>;

export const Default: Story = {
  args: {
    label: "Specify",
    required: true,
  },
};

export const Error: Story = {
  args: {
    label: "Specify",
    helpText:
      "Please, provide us with the names and countries of these financial institutions",
    required: true,
    invalid: true,
  },
};
