import { Dispatch, SetStateAction } from "react";

export type AuthContextValues = {
  auth: Auth | null;
  setAuth: Dispatch<SetStateAction<Auth | null>>;
};

export interface Auth {
  user: string;
  pwd: string;
  roles?: string[];
  accessToken?: string;
}
