import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const GardenIcon = ({color = '#BDBDBD'}) => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G>
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8593 1.59441L14.7938 1.51369C14.4477 1.13701 13.8278 1.16389 13.5207 1.59437L7.79361 9.62218L7.65928 9.8164C5.17065 13.5308 6.29784 18.5946 10.1728 20.8975C11.166 21.4873 12.2572 21.8404 13.3678 21.9568L13.3684 24.1802L13.3739 24.2758C13.4214 24.6835 13.7686 25 14.1899 25C14.6437 25 15.0115 24.6329 15.0115 24.1802L15.0114 21.9568C16.1219 21.8404 17.213 21.4873 18.206 20.8976L18.4072 20.7739L18.604 20.6444C22.2307 18.1819 23.1469 13.2118 20.5854 9.6221L14.8593 1.59441ZM24.6616 18.6569C24.7527 18.2133 24.4663 17.78 24.0218 17.6891C23.5774 17.5981 23.1431 17.8839 23.052 18.3275C22.9247 18.9465 22.6293 19.4851 22.2113 19.9477C22.0071 20.1736 21.7875 20.3659 21.5694 20.5231L21.437 20.6146L21.2337 20.7383C20.8948 20.9709 20.777 21.4252 20.9741 21.7968C21.1864 22.197 21.6836 22.3496 22.0846 22.1378C22.4432 21.9483 22.9388 21.591 23.4315 21.0457C24.0348 20.3781 24.4714 19.5824 24.6616 18.6569ZM14.19 8.39839C13.7687 8.39839 13.4214 8.71488 13.3739 9.12262L13.3684 9.21823L13.3681 12.3246L12.1208 11.0516L12.0442 10.9825C11.7247 10.7289 11.2585 10.7465 10.9591 11.0388C10.6597 11.3311 10.6318 11.7958 10.8788 12.1202L10.9463 12.1981L13.3082 14.6076L13.3681 14.6619L13.3684 18.4414L13.3739 18.537C13.4214 18.9447 13.7687 19.2612 14.19 19.2612C14.5789 19.2612 14.9047 18.9915 14.9898 18.6293L15.006 18.537L15.0104 18.4561L17.7834 15.4809L17.8489 15.4012C18.0876 15.0707 18.0479 14.6068 17.7412 14.3222C17.4344 14.0376 16.9679 14.0318 16.6549 14.2934L16.5801 14.3644L15.0112 16.0474L15.0115 9.21823L15.006 9.12262C14.9585 8.71488 14.6113 8.39839 14.19 8.39839ZM6.50764 8.20212C6.76509 7.88594 6.75231 7.42052 6.46257 7.11872C6.14869 6.79176 5.62863 6.78063 5.30098 7.09385C4.98552 7.39544 4.54537 7.94071 4.11293 8.72105C3.76214 9.35406 3.47604 10.0505 3.27704 10.8082C3.16201 11.2462 3.42456 11.6943 3.86347 11.8091C4.30237 11.9239 4.75143 11.6619 4.86647 11.2239C5.02964 10.6026 5.264 10.0321 5.55082 9.51454C5.75393 9.14803 5.97049 8.83074 6.18492 8.56511L6.31538 8.40931L6.50764 8.20212Z"
          fill={color}
        />
      </G>
    </G>
  </Svg>
);

export default GardenIcon;
