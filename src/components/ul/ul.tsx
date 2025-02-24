import React, {
  type ReactElement,
  type PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef
} from "react";

import { Ul as Root } from "./ul.styles";

export type UlProps = ComponentPropsWithoutRef<typeof Root>;

const Ul = ({ children, ...props }: PropsWithChildren<UlProps>, ref: ForwardedRef<HTMLUListElement>): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Ul);
