import React, {
  type ReactElement,
  type PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef
} from "react";

import { Anchor as Root } from "./anchor.styles";

export type AnchorProps = ComponentPropsWithoutRef<typeof Root>;

const Anchor = (
  { children, ...props }: PropsWithChildren<AnchorProps>,
  ref: ForwardedRef<HTMLAnchorElement>
): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Anchor);
