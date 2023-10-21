import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const Scanner = () => (
  <Svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    testID={'ScannerIcon'}>
    <Rect
      y="0.318604"
      width="36"
      height="35.6814"
      rx="8"
      fill="black"
      fillOpacity="0.24"
    />
    <G clip-path="url(#clip0_1_1136)">
      <Path
        d="M13.5 25.4531H11.25C11.0635 25.453 10.8847 25.3789 10.7529 25.2471C10.621 25.1152 10.5469 24.9364 10.5469 24.75V22.5C10.5453 22.3892 10.5001 22.2834 10.4211 22.2056C10.3422 22.1278 10.2358 22.0842 10.125 22.0842C10.0142 22.0842 9.90778 22.1278 9.82884 22.2056C9.7499 22.2834 9.70474 22.3892 9.70312 22.5V24.75C9.70385 25.16 9.86705 25.553 10.157 25.843C10.4469 26.1329 10.84 26.2961 11.25 26.2969H13.5C13.6109 26.2953 13.7166 26.2501 13.7945 26.1712C13.8723 26.0923 13.916 25.9858 13.916 25.875C13.916 25.7641 13.8723 25.6577 13.7945 25.5788C13.7166 25.4998 13.6109 25.4547 13.5 25.4531Z"
        fill="white"
      />
      <Path
        d="M25.875 22.0781C25.8196 22.0781 25.7647 22.0889 25.7135 22.1101C25.6622 22.1313 25.6157 22.1623 25.5765 22.2015C25.5373 22.2407 25.5062 22.2873 25.4851 22.3385C25.4639 22.3897 25.453 22.4446 25.4531 22.5V24.75C25.453 24.9365 25.3789 25.1153 25.2471 25.2471C25.1152 25.379 24.9364 25.4531 24.75 25.4531H22.5C22.3892 25.4548 22.2834 25.4999 22.2056 25.5789C22.1278 25.6578 22.0842 25.7642 22.0842 25.875C22.0842 25.9858 22.1278 26.0922 22.2056 26.1712C22.2834 26.2501 22.3892 26.2953 22.5 26.2969H24.75C25.16 26.2962 25.5531 26.133 25.843 25.843C26.1329 25.5531 26.2961 25.16 26.2969 24.75V22.5C26.2969 22.4446 26.2861 22.3897 26.2649 22.3385C26.2437 22.2873 26.2126 22.2407 26.1735 22.2015C26.1343 22.1623 26.0877 22.1313 26.0365 22.1101C25.9853 22.0889 25.9304 22.0781 25.875 22.0781Z"
        fill="white"
      />
      <Path
        d="M10.125 13.9219C10.1804 13.922 10.2353 13.9111 10.2865 13.8899C10.3377 13.8687 10.3843 13.8377 10.4235 13.7985C10.4627 13.7593 10.4937 13.7128 10.5149 13.6615C10.5361 13.6103 10.5469 13.5554 10.5469 13.5V11.25C10.5469 11.0635 10.621 10.8847 10.7529 10.7529C10.8847 10.621 11.0635 10.5469 11.25 10.5469H13.5C13.6108 10.5453 13.7166 10.5001 13.7943 10.4212C13.8721 10.3422 13.9157 10.2358 13.9157 10.125C13.9157 10.0142 13.8721 9.90778 13.7943 9.82884C13.7165 9.7499 13.6108 9.70474 13.5 9.70312H11.25C10.84 9.70384 10.4469 9.86705 10.157 10.157C9.86705 10.4469 9.70385 10.84 9.70313 11.25V13.5C9.70305 13.5554 9.71391 13.6103 9.73509 13.6615C9.75626 13.7128 9.78734 13.7593 9.82652 13.7985C9.86571 13.8377 9.91225 13.8687 9.96347 13.8899C10.0147 13.9111 10.0696 13.922 10.125 13.9219Z"
        fill="white"
      />
      <Path
        d="M24.75 9.70312H22.5C22.3881 9.70312 22.2808 9.74757 22.2017 9.82669C22.1226 9.90581 22.0781 10.0131 22.0781 10.125C22.0781 10.2369 22.1226 10.3442 22.2017 10.4233C22.2808 10.5024 22.3881 10.5469 22.5 10.5469H24.75C24.9365 10.5469 25.1153 10.621 25.2471 10.7529C25.379 10.8847 25.4531 11.0635 25.4531 11.25V13.5C25.4547 13.6108 25.4999 13.7166 25.5789 13.7943C25.6578 13.8721 25.7642 13.9158 25.875 13.9157C25.9858 13.9157 26.0922 13.8721 26.1712 13.7943C26.2501 13.7165 26.2953 13.6108 26.2969 13.5V11.25C26.2962 10.84 26.133 10.4469 25.843 10.157C25.5531 9.86705 25.16 9.70384 24.75 9.70312Z"
        fill="white"
      />
      <Path
        d="M13.0781 14.625V16.7344H22.9219V14.625C22.9212 14.215 22.758 13.8219 22.468 13.532C22.1781 13.242 21.785 13.0788 21.375 13.0781H14.625C14.215 13.0788 13.8219 13.242 13.532 13.532C13.242 13.8219 13.0788 14.215 13.0781 14.625Z"
        fill="white"
      />
      <Path
        d="M22.9219 21.375V18.4219H24.75C24.8619 18.4219 24.9692 18.3774 25.0483 18.2983C25.1274 18.2192 25.1719 18.1119 25.1719 18C25.1719 17.8881 25.1274 17.7808 25.0483 17.7017C24.9692 17.6226 24.8619 17.5781 24.75 17.5781H11.25C11.1392 17.5797 11.0334 17.6249 10.9556 17.7039C10.8778 17.7828 10.8342 17.8892 10.8342 18C10.8342 18.1108 10.8778 18.2172 10.9556 18.2962C11.0334 18.3751 11.1392 18.4203 11.25 18.4219H13.0781V21.375C13.0788 21.785 13.242 22.1781 13.532 22.468C13.8219 22.7579 14.2149 22.9212 14.625 22.9219H21.375C21.785 22.9212 22.178 22.7579 22.468 22.468C22.7579 22.1781 22.9211 21.785 22.9219 21.375Z"
        fill="white"
        fillOpacity="0.7"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_1136">
        <Rect width="18" height="18" fill="white" transform="translate(9 9)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Scanner;