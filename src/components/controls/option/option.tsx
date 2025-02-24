import React, { type ReactElement, forwardRef, ForwardedRef, ComponentPropsWithoutRef } from "react";

import { Option as Root } from "./option.styles";

export type OptionProps = ComponentPropsWithoutRef<typeof Root>;

const Option = ({ children, ...props }: OptionProps, ref: ForwardedRef<HTMLOptionElement>): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Option);
