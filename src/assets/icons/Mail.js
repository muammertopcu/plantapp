import React from 'react';
import Svg, {Defs, G, Path, LinearGradient, Stop} from 'react-native-svg';

const Mail = () => (
  <Svg
    width="52"
    height="45"
    viewBox="0 0 52 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G filter="url(#filter0_d_3_7214)">
      <Path
        d="M28.6743 23.3549C27.8782 23.8856 26.9534 24.1662 26 24.1662C25.0466 24.1662 24.1219 23.8856 23.3258 23.3549L10.2131 14.6128C10.1403 14.5643 10.0694 14.5137 10 14.4617V28.7865C10 30.4289 11.3328 31.7324 12.9458 31.7324H39.0541C40.6965 31.7324 41.9999 30.3995 41.9999 28.7865V14.4617C41.9304 14.5138 41.8594 14.5645 41.7864 14.613L28.6743 23.3549Z"
        fill="url(#paint0_linear_3_7214)"
      />
      <Path
        d="M11.2531 13.0526L24.3658 21.7948C24.8622 22.1257 25.4311 22.2911 25.9999 22.2911C26.5689 22.2911 27.1378 22.1256 27.6342 21.7948L40.7469 13.0526C41.5316 12.5298 42 11.6548 42 10.7104C42 9.08663 40.6789 7.76562 39.0552 7.76562H12.9448C11.3211 7.76569 10 9.08669 10 10.712C10 11.6548 10.4685 12.5298 11.2531 13.0526Z"
        fill="url(#paint1_linear_3_7214)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_3_7214"
        x1="26"
        y1="14.4617"
        x2="41.8085"
        y2="37.5515"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F0D399" />
        <Stop offset="1" stopColor="#D9A846" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_3_7214"
        x1="26"
        y1="7.76563"
        x2="38.3343"
        y2="29.1859"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F0D399" />
        <Stop offset="1" stopColor="#D9A846" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Mail;
