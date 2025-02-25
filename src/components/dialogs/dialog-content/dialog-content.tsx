import { ComponentPropsWithoutRef, PropsWithChildren, type ReactElement } from "react";

import { DialogContent as Root } from "./dialog-content.styles";

export type DialogContentProps = ComponentPropsWithoutRef<typeof Root>;

function DialogContent({ children }: PropsWithChildren<DialogContentProps>): ReactElement {
  return <Root>{children}</Root>;
}

export default DialogContent;
