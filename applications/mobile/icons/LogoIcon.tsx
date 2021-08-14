import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function LogoIcon(props: SvgProps) {
  return (
    <Svg width={72} height={71} viewBox="0 0 72 71" fill="none" {...props}>
      <Rect x={0.893} width={71} height={71} rx={6} fill="#FEFFFF" />
      <Path
        d="M11.423 33.276a.03.03 0 00-.03.03v21.522a5.172 5.172 0 0010.345 0V36.293c0-8.332 6.754-15.086 15.086-15.086S51.91 27.96 51.91 36.293V55.26a4.741 4.741 0 009.483 0V33.306a.03.03 0 00-.03-.03.03.03 0 01-.03-.029C60.432 20.259 49.61 10 36.392 10c-13.218 0-24.04 10.258-24.94 23.248a.03.03 0 01-.03.028z"
        fill="#C91988"
      />
      <Path
        d="M36.798 60a4.905 4.905 0 004.905-4.905V39.043a4.905 4.905 0 10-9.81 0v16.052A4.905 4.905 0 0036.798 60z"
        fill="#C91988"
      />
    </Svg>
  );
}

export default LogoIcon;
