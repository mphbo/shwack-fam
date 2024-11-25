export interface IErrors {
  email: {
    isError: boolean;
    description: string;
  };
  name: {
    isError: boolean;
    description: string;
  };
  message: {
    isError: boolean;
    description: string;
  };
}

export const defaultErrors = {
  name: {
    isError: false,
    description: "Please enter a name.",
  },
  email: {
    isError: false,
    description: "Please enter an email in the correct format.",
  },
  message: {
    isError: false,
    description: "Please enter a message.",
  },
};

export interface IFields {
  email: string;
  name: string;
  message: string;
}

export enum EFields {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

export const defaultFields = {
  name: "",
  email: "",
  message: "",
};

export const formEndpoint =
  "https://public.herotofu.com/v1/d2599400-158e-11ef-a449-3b7e66789316";
