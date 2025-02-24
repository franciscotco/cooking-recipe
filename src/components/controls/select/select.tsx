import React, {
  type ReactElement,
  type PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef
} from "react";

import { Select as Root } from "./select.styles";

export type SelectProps = ComponentPropsWithoutRef<typeof Root>;

const Select = (
  { children, ...props }: PropsWithChildren<SelectProps>,
  ref: ForwardedRef<HTMLSelectElement>
): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Select);
