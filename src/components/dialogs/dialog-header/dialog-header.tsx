import { PropsWithChildren, type ReactElement } from "react";

import { DialogHeader as Root } from "./dialog-header.styles";

function DialogHeader({ children }: PropsWithChildren<unknown>): ReactElement {
  return <Root>{children}</Root>;
}

export default DialogHeader;
