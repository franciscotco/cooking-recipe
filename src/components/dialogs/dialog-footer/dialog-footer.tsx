import { PropsWithChildren, type ReactElement } from "react";

import { DialogFooter as Root } from "./dialog-footer.styles";

function DialogFooter({ children }: PropsWithChildren<unknown>): ReactElement {
  return <Root>{children}</Root>;
}

export default DialogFooter;
