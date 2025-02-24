import React, { type ReactElement, forwardRef, ForwardedRef, ComponentPropsWithoutRef } from "react";

import { Dialog as Root } from "./dialog.styles";

export type DialogProps = ComponentPropsWithoutRef<typeof Root>;

const Dialog = ({ children, ...props }: DialogProps, ref: ForwardedRef<HTMLDialogElement>): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Dialog);
