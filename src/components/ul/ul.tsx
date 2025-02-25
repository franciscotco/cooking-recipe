import { type ReactElement, type PropsWithChildren, forwardRef, ForwardedRef, ComponentPropsWithoutRef } from "react";

import { type ListType, Ul as Root } from "./ul.styles";

export interface UlProps extends ComponentPropsWithoutRef<typeof Root> {
  type?: ListType;
}

const Ul = (
  { children, type, ...props }: PropsWithChildren<UlProps>,
  ref: ForwardedRef<HTMLUListElement>
): ReactElement => (
  <Root {...props} type={type} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Ul);
