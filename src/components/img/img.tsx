import React, {
  type ReactElement,
  type PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef
} from "react";

import { Img as Root } from "./img.styles";

export type ImgProps = ComponentPropsWithoutRef<typeof Root>;

const Img = (
  { children, ...props }: PropsWithChildren<ImgProps>,
  ref: ForwardedRef<HTMLImageElement>
): ReactElement => (
  <Root {...props} ref={ref}>
    {children}
  </Root>
);

export default forwardRef(Img);
