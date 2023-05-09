import "@emotion/react";
import { theme } from "theme";

declare module "@emotion/react" {
  type T = typeof theme;
  export interface Theme extends T {}
}
