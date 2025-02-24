import React, { type ReactElement, forwardRef, ForwardedRef, ComponentPropsWithoutRef, ReactNode } from "react";

import { Fieldset as Root } from "./fieldset.styles";

export interface FieldsetProps extends ComponentPropsWithoutRef<typeof Root> {
  legend?: ReactNode;
}

const Fieldset = (
  { children, legend, ...props }: FieldsetProps,
  ref: ForwardedRef<HTMLFieldSetElement>
): ReactElement => (
  <Root {...props} ref={ref}>
    {Boolean(legend) && <legend>{legend}</legend>}
    {children}
  </Root>
);

export default forwardRef(Fieldset);
