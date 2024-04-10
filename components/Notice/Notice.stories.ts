import { Meta, StoryObj } from "@storybook/react";

import Notice, { type NoticeProps } from "./Notice";

const meta: Meta<NoticeProps> = {
  title: "Molecules/Notice",
  component: Notice,
};

export default meta;

export const Primary: StoryObj<NoticeProps> = {
  args: {
    onClose: () => console.log("Closed"),
  },
};

export const NoticeSuccess: StoryObj<NoticeProps> = {
  args: {
    type: "success",
    message: "Este é uma Box Padrão",
    onClose: () => console.log("Closed"),
  },
};

export const NoticeAlert: StoryObj<NoticeProps> = {
  args: {
    type: "alert",
    message: "Este é um alerta!",
    onClose: () => console.log("Closed"),
  },
};

export const NoticeError: StoryObj<NoticeProps> = {
  args: {
    type: "error",
    message: "Operação concluída com sucesso!",
    onClose: () => console.log("Closed"),
  },
};
