import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const Speedometer = () => (
  <Svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect width="36" height="35.6814" rx="8" fill="black" fillOpacity="0.24" />
    <Path
      d="M25.9975 22.2654C25.9962 22.2285 25.9949 22.1914 25.9936 22.1541C25.9923 22.1169 25.9909 22.0795 25.9895 22.042L25.9885 22.0139L25.9879 21.9998L25.9878 21.9963L25.9874 21.9648L25.9873 21.9633L25.9869 21.9575L25.9833 21.9108C25.9784 21.8485 25.9736 21.786 25.9687 21.7235L25.965 21.6762L25.9594 21.6148C25.9556 21.574 25.9517 21.5332 25.9479 21.4925C25.9439 21.4518 25.9399 21.4112 25.9359 21.3708C25.9338 21.3506 25.9318 21.3304 25.9298 21.3103C25.9273 21.2917 25.9248 21.2731 25.9224 21.2545C25.902 21.107 25.8838 20.962 25.8578 20.8227C25.8455 20.753 25.8342 20.6844 25.8215 20.6176C25.8075 20.5509 25.7939 20.4858 25.7807 20.4223C25.7556 20.2953 25.7241 20.1767 25.6976 20.067C25.6908 20.0396 25.6841 20.0128 25.6776 19.9866C25.6704 19.9605 25.6633 19.9351 25.6564 19.9103C25.6424 19.8608 25.6291 19.8138 25.6167 19.7697C25.6039 19.7257 25.5927 19.6844 25.581 19.6465C25.569 19.6087 25.5579 19.574 25.5479 19.5426C25.5331 19.4966 25.5206 19.4578 25.5107 19.4271C25.4961 19.3819 25.4483 19.3564 25.4026 19.3694L22.5285 20.1885C22.4847 20.201 22.4576 20.2446 22.4659 20.2894C22.469 20.3061 22.4726 20.3252 22.4765 20.3467C22.4806 20.3682 22.4852 20.3921 22.4901 20.4181C22.4948 20.4442 22.4985 20.4728 22.5032 20.5029C22.5078 20.5332 22.5127 20.5654 22.5179 20.5993C22.5204 20.6162 22.5234 20.6335 22.5257 20.6513C22.5278 20.6692 22.5298 20.6876 22.532 20.7063C22.54 20.7812 22.5519 20.8614 22.5573 20.9475C22.5608 20.9903 22.5644 21.0343 22.5682 21.0792C22.571 21.1243 22.5724 21.1705 22.5748 21.2172C22.581 21.3105 22.5798 21.4076 22.5816 21.5056L22.582 21.542L22.5807 21.5743C22.58 21.5959 22.5792 21.6174 22.5785 21.6391C22.5779 21.6606 22.5773 21.6822 22.5767 21.7038L22.5761 21.7362L22.5741 21.7827C22.5714 21.8454 22.5687 21.908 22.5661 21.9704L22.5641 22.0172L22.5638 22.023L22.5638 22.0245C22.5638 22.0315 22.5632 21.9688 22.5634 21.9959L22.5632 21.9982L22.5623 22.0074L22.5606 22.0259C22.5584 22.0504 22.5562 22.0749 22.554 22.0993C22.5518 22.1236 22.5497 22.1479 22.5476 22.172C22.5448 22.196 22.5419 22.2199 22.5391 22.2436C22.5329 22.291 22.5292 22.338 22.5216 22.3838C22.515 22.4296 22.5085 22.4745 22.5021 22.5186C22.4945 22.5624 22.4871 22.6052 22.4798 22.6468C22.4733 22.6885 22.4645 22.7287 22.4567 22.7676C22.4486 22.8064 22.4421 22.844 22.4336 22.8798C22.4254 22.9155 22.4174 22.9497 22.4099 22.9823C22.4062 22.9984 22.4026 23.014 22.3991 23.0293C22.3954 23.0424 22.392 23.055 22.3885 23.0673C22.3865 23.0748 22.3846 23.0819 22.3827 23.0892H25.8979C25.945 23.0892 25.9842 23.0522 25.986 23.0051C25.986 23.0048 25.986 23.0046 25.986 23.0043C25.989 22.9388 25.992 22.8716 25.995 22.8029C25.9964 22.7342 25.9977 22.6641 25.9991 22.5928C26.0011 22.5215 25.9989 22.4491 25.9987 22.3759C25.9983 22.3393 25.9979 22.3025 25.9975 22.2654Z"
      fill="white"
      fillOpacity="0.7"
    />
    <Path
      d="M25.0836 18.576C25.1308 18.557 25.1523 18.5024 25.1306 18.4565C25.1209 18.436 25.1096 18.4122 25.0968 18.3852C25.0847 18.3598 25.0714 18.3317 25.0569 18.3011C25.0381 18.2629 25.0178 18.2215 24.9961 18.1774C24.9743 18.1333 24.951 18.0865 24.9265 18.0372C24.914 18.0115 24.9018 17.9903 24.889 17.9662C24.8763 17.9427 24.8632 17.9186 24.8499 17.894C24.8231 17.8449 24.7957 17.7936 24.7663 17.741C24.7359 17.689 24.7045 17.6352 24.6723 17.5799C24.6561 17.5523 24.6397 17.5244 24.6231 17.4961C24.6057 17.4682 24.5881 17.4401 24.5704 17.4116C24.5346 17.3548 24.4981 17.2968 24.461 17.2379C24.3827 17.1225 24.3047 17.0017 24.2177 16.8843C24.1963 16.8547 24.1748 16.825 24.1533 16.7952L24.1209 16.7506L24.0872 16.7067C24.0421 16.6483 23.9968 16.5897 23.9515 16.5311C23.9055 16.4732 23.8578 16.4165 23.8111 16.3596C23.7874 16.3313 23.7646 16.3026 23.7404 16.275C23.7163 16.2474 23.6922 16.22 23.6682 16.1926C23.6441 16.1653 23.6202 16.1381 23.5964 16.1111C23.5727 16.084 23.5488 16.0573 23.5242 16.0315C23.4755 15.9796 23.4273 15.9283 23.38 15.8778C23.3326 15.8276 23.2835 15.7803 23.2367 15.7331C23.1897 15.6861 23.1439 15.6399 23.0972 15.5971C23.051 15.5538 23.0061 15.5118 22.9626 15.4711C22.9194 15.4303 22.8752 15.3933 22.834 15.3566C22.7925 15.3203 22.7528 15.2855 22.7149 15.2524C22.6761 15.2205 22.6393 15.1902 22.6047 15.1617C22.5701 15.1333 22.5378 15.1067 22.5078 15.0822C22.4778 15.0577 22.4491 15.0365 22.4239 15.0167C22.387 14.9885 22.3559 14.9646 22.3312 14.9456C22.2936 14.9167 22.2399 14.9229 22.2096 14.9595L20.667 16.8268C20.6379 16.862 20.6404 16.9134 20.6728 16.9456C20.6857 16.9583 20.7006 16.9731 20.7174 16.9897C20.7334 17.0058 20.7518 17.0229 20.7707 17.0428C20.7895 17.0627 20.8099 17.0843 20.8317 17.1073C20.8535 17.1302 20.8767 17.1546 20.9011 17.1803C20.9247 17.2068 20.9495 17.2347 20.9753 17.2638C21.0009 17.2932 21.0288 17.3224 21.0553 17.3549C21.0821 17.3871 21.1098 17.4204 21.1383 17.4546C21.1673 17.4882 21.195 17.5247 21.2236 17.5616C21.252 17.5987 21.2823 17.6353 21.3108 17.6745C21.3393 17.7137 21.3683 17.7534 21.3976 17.7937C21.4126 17.8135 21.4268 17.8342 21.4407 17.8551C21.4549 17.876 21.4691 17.8969 21.4834 17.9179C21.4976 17.9388 21.512 17.9598 21.5264 17.9809C21.5407 18.0019 21.5539 18.024 21.5677 18.0456C21.595 18.0891 21.6232 18.132 21.65 18.1758C21.6761 18.22 21.7022 18.2643 21.7282 18.3084L21.7477 18.3413L21.7659 18.3749C21.7782 18.3972 21.7903 18.4194 21.8024 18.4415C21.8524 18.529 21.8946 18.6192 21.9388 18.704C21.959 18.7474 21.9789 18.7901 21.9984 18.832C22.0081 18.8528 22.0178 18.8734 22.0273 18.8938C22.0361 18.9145 22.0448 18.9349 22.0534 18.9551C22.0707 18.9953 22.0874 19.0345 22.1037 19.0723C22.1187 19.1106 22.1332 19.1477 22.1471 19.1832C22.1541 19.201 22.1609 19.2184 22.1676 19.2353C22.1739 19.2519 22.1817 19.2698 22.1859 19.2836C22.1958 19.3126 22.2052 19.3401 22.214 19.366C22.223 19.3916 22.2315 19.4156 22.2393 19.4378C22.2496 19.4684 22.259 19.4965 22.2675 19.5219C22.2769 19.5502 22.2853 19.5753 22.2924 19.5967C22.3085 19.6449 22.3619 19.6695 22.409 19.6506L25.0836 18.576Z"
      fill="white"
      fillOpacity="0.7"
    />
    <Path
      d="M17.2282 15.2408C17.2515 15.244 17.2774 15.2475 17.3055 15.2513C17.3335 15.2562 17.3638 15.2615 17.3961 15.2671C17.4284 15.2727 17.4628 15.2785 17.499 15.2848C17.5304 15.29 17.563 15.2976 17.5969 15.3047L18.5704 13.3133C18.5222 13.3058 18.4743 13.2983 18.4274 13.291C18.3953 13.2862 18.3636 13.2807 18.3321 13.2768C18.3006 13.273 18.2695 13.2692 18.2387 13.2655C18.1774 13.2582 18.1177 13.2511 18.06 13.2442C18.0021 13.2393 17.9462 13.2345 17.8925 13.2299C17.8388 13.2258 17.7876 13.2203 17.7386 13.218C17.6897 13.2156 17.6433 13.2133 17.5997 13.2112C17.5561 13.2091 17.5153 13.2072 17.4777 13.2054C17.44 13.2048 17.4053 13.2042 17.374 13.2037C17.33 13.2032 17.2926 13.2028 17.2627 13.2024C17.2152 13.2018 17.1759 13.239 17.1736 13.2864L17.0848 15.1399C17.0826 15.1856 17.1156 15.2253 17.1609 15.2315C17.1802 15.2342 17.2027 15.2373 17.2282 15.2408Z"
      fill="white"
      fillOpacity="0.7"
    />
    <Path
      d="M19.8447 16.2613C19.8709 16.2803 19.8957 16.2984 19.919 16.3153C19.9423 16.3321 19.9641 16.3477 19.9843 16.3622C19.9931 16.3682 20.0075 16.3791 20.0193 16.3879C20.0315 16.397 20.0431 16.4056 20.054 16.4138C20.078 16.4317 20.0991 16.4475 20.1172 16.461C20.158 16.4914 20.2158 16.4811 20.2437 16.4386L21.5147 14.5025C21.5426 14.46 21.5291 14.4029 21.485 14.3776C21.4654 14.3664 21.4425 14.3532 21.4166 14.3383C21.4047 14.3315 21.3921 14.3243 21.379 14.3168C21.3646 14.3087 21.3497 14.3002 21.334 14.2914C21.2979 14.2714 21.2588 14.2499 21.217 14.2269C21.1752 14.2041 21.1307 14.1799 21.0838 14.1543C21.0391 14.1319 20.9922 14.1084 20.9431 14.0838C20.8939 14.0598 20.8437 14.0331 20.7899 14.0088C20.7363 13.9843 20.6809 13.9589 20.6239 13.9328C20.5674 13.9061 20.5077 13.8818 20.4471 13.8564C20.3863 13.8315 20.325 13.8042 20.2611 13.7802C20.2449 13.7741 20.2285 13.7678 20.2121 13.7617L19.6638 16.1416C19.6941 16.1606 19.7227 16.1808 19.7508 16.199C19.7836 16.2208 19.8149 16.2415 19.8447 16.2613Z"
      fill="white"
      fillOpacity="0.7"
    />
    <Path
      d="M15.5215 15.231C15.546 15.2278 15.5701 15.2238 15.5942 15.2212C15.6183 15.2188 15.6421 15.2164 15.6655 15.214C15.7123 15.2091 15.7578 15.2044 15.8018 15.1998C15.846 15.1969 15.8887 15.194 15.9296 15.1913C15.9501 15.1899 15.9701 15.1885 15.9896 15.1872C16.0091 15.1859 16.0287 15.1842 16.0454 15.1842C16.08 15.1833 16.1127 15.1824 16.1435 15.1816C16.1742 15.1807 16.2028 15.1797 16.2294 15.1789C16.2621 15.1787 16.2922 15.1785 16.3193 15.1783C16.3492 15.1781 16.3756 15.178 16.3982 15.1779C16.449 15.1776 16.4889 15.1346 16.4856 15.0839L16.3712 13.3379C16.3678 13.2872 16.3226 13.2497 16.2722 13.2561C16.2498 13.2589 16.2236 13.2622 16.194 13.266C16.1665 13.2694 16.1361 13.2733 16.1029 13.2776C16.0638 13.2834 16.0214 13.2896 15.9762 13.2963C15.9311 13.3032 15.883 13.3105 15.8324 13.3182C15.8065 13.3219 15.7826 13.3267 15.7576 13.3315C15.7326 13.3362 15.7071 13.3411 15.681 13.3461C15.629 13.3561 15.5748 13.3666 15.5186 13.3775C15.4629 13.3902 15.4053 13.4033 15.3461 13.4168C15.3165 13.4236 15.2866 13.4304 15.2563 13.4374C15.226 13.4445 15.1956 13.4532 15.1648 13.4611C15.1034 13.4775 15.0406 13.4942 14.9767 13.5112C14.9135 13.5303 14.8493 13.5497 14.7843 13.5693C14.7518 13.5793 14.7191 13.5888 14.6865 13.5995C14.6541 13.6106 14.6214 13.6217 14.5887 13.6329C14.556 13.6441 14.5232 13.6553 14.4902 13.6666C14.4573 13.6778 14.4243 13.6891 14.3918 13.7019C14.3266 13.7268 14.2611 13.7518 14.1956 13.7768C14.1304 13.8023 14.0663 13.8306 14.0021 13.8573C13.97 13.871 13.9379 13.8841 13.9062 13.8982C13.8748 13.9127 13.8435 13.9271 13.8122 13.9416C13.7811 13.956 13.75 13.9704 13.7192 13.9847C13.6883 13.9989 13.6576 14.013 13.6277 14.0285C13.5677 14.0588 13.5085 14.0887 13.4502 14.1181C13.3919 14.1474 13.3364 14.1796 13.2812 14.2093C13.2263 14.2395 13.1723 14.2684 13.1213 14.2995C13.0701 14.3298 13.0202 14.3594 12.972 14.388C12.9237 14.4162 12.8788 14.4467 12.8349 14.4742C12.7912 14.5022 12.7494 14.529 12.7096 14.5545C12.6707 14.5812 12.6338 14.6066 12.5991 14.6304C12.5645 14.6542 12.5321 14.6765 12.5021 14.6971C12.4722 14.7178 12.4458 14.7382 12.4214 14.7559C12.3883 14.7803 12.3601 14.8011 12.3373 14.818C12.2991 14.8461 12.2902 14.8993 12.3168 14.9385L13.0418 16.0044C13.0676 16.0424 13.1181 16.0543 13.1581 16.0317C13.1765 16.0213 13.1982 16.009 13.223 15.995C13.2447 15.9831 13.2681 15.9689 13.2945 15.9552C13.3209 15.9414 13.3495 15.9265 13.38 15.9106C13.4104 15.8947 13.4428 15.8778 13.4769 15.86C13.5117 15.8433 13.5481 15.8258 13.5862 15.8076C13.6245 15.7898 13.6633 15.7693 13.7051 15.7515C13.7467 15.7333 13.7896 15.7145 13.8338 15.6951C13.8775 15.6749 13.9238 15.6573 13.9707 15.6386C14.0178 15.6203 14.0649 15.5997 14.1143 15.5822C14.1635 15.5645 14.2136 15.5465 14.2642 15.5282C14.2893 15.5187 14.3151 15.5106 14.341 15.5023C14.3669 15.494 14.3929 15.4856 14.4189 15.4773C14.445 15.4688 14.4711 15.4604 14.4973 15.4519C14.5236 15.4439 14.5503 15.4368 14.5769 15.4291C14.6302 15.4144 14.6831 15.398 14.7368 15.3843C14.7905 15.371 14.8443 15.3577 14.8978 15.3445C14.9243 15.3374 14.9513 15.3319 14.9781 15.3264C15.0049 15.3207 15.0316 15.3151 15.0582 15.3095C15.0847 15.3039 15.1111 15.2983 15.1374 15.2927C15.1638 15.2874 15.1903 15.2834 15.2164 15.2786C15.2687 15.2696 15.3204 15.2606 15.3712 15.2518C15.4222 15.2448 15.4723 15.2378 15.5215 15.231Z"
      fill="white"
      fillOpacity="0.7"
    />
    <Path
      d="M10.5779 16.6092C10.5589 16.6361 10.5398 16.6631 10.5206 16.6902C10.5015 16.7173 10.4823 16.7445 10.4631 16.7718C10.4439 16.7991 10.426 16.8274 10.4073 16.8553C10.3706 16.9115 10.333 16.9672 10.297 17.0239C10.2618 17.0812 10.2266 17.1384 10.1916 17.1954L10.1655 17.2381L10.1407 17.2815C10.1242 17.3104 10.1078 17.3392 10.0914 17.3678C10.0245 17.4815 9.96635 17.5977 9.90726 17.7081C9.87976 17.7644 9.8527 17.8197 9.82622 17.8739C9.81308 17.901 9.80007 17.9278 9.78724 17.9542C9.77516 17.981 9.76325 18.0075 9.75147 18.0337C9.72803 18.0859 9.70523 18.1367 9.68317 18.1859C9.66259 18.2356 9.64269 18.2837 9.6236 18.3298C9.60488 18.3761 9.58596 18.4199 9.56984 18.4624C9.55393 18.5049 9.53883 18.5453 9.52462 18.5832C9.51048 18.6211 9.49726 18.6566 9.48504 18.6893C9.47375 18.7224 9.46338 18.7528 9.45401 18.7803C9.44184 18.8164 9.43139 18.8474 9.42285 18.8728C9.40773 18.9176 9.43073 18.9663 9.47493 18.9832L10.1497 19.2419C10.1927 19.2584 10.2411 19.2392 10.2609 19.1977C10.2707 19.1771 10.2825 19.1525 10.296 19.1243C10.3072 19.101 10.3196 19.0752 10.3331 19.0471C10.3475 19.0195 10.363 18.9896 10.3796 18.9576C10.3961 18.9257 10.4137 18.8917 10.4322 18.856C10.4509 18.8203 10.4724 18.7837 10.4937 18.745C10.5154 18.7066 10.5379 18.6665 10.5612 18.625C10.5858 18.5844 10.6112 18.5423 10.6373 18.499C10.6503 18.4774 10.6635 18.4555 10.6768 18.4334C10.6909 18.4116 10.7051 18.3897 10.7195 18.3674C10.7482 18.323 10.7776 18.2777 10.8075 18.2316C10.8709 18.1417 10.933 18.0471 11.0031 17.9559C11.0202 17.9328 11.0374 17.9097 11.0547 17.8865L11.0805 17.8516L11.1076 17.8175C11.1437 17.7721 11.1799 17.7265 11.2161 17.681C11.253 17.6359 11.2913 17.5921 11.3285 17.5478C11.3474 17.5259 11.3655 17.5035 11.3848 17.4821C11.4041 17.4608 11.4234 17.4396 11.4425 17.4184C11.4617 17.3972 11.4807 17.3762 11.4997 17.3552C11.5185 17.3341 11.5375 17.3134 11.5572 17.2936C11.5959 17.2534 11.6342 17.2138 11.6719 17.1747C11.7095 17.1358 11.7487 17.0996 11.7858 17.0631C11.8231 17.0268 11.8592 16.991 11.8964 16.9582C11.933 16.925 11.9686 16.8926 12.003 16.8612C12.0371 16.8297 12.0723 16.8016 12.1048 16.7734C12.1375 16.7455 12.1689 16.7188 12.1987 16.6934C12.228 16.6702 12.2557 16.6483 12.2818 16.6276C12.3078 16.6069 12.332 16.5876 12.3545 16.5697C12.3648 16.5612 12.3788 16.551 12.3906 16.542C12.4027 16.5329 12.4142 16.5242 12.4252 16.5159C12.449 16.4979 12.4701 16.482 12.4881 16.4684C12.5287 16.4378 12.535 16.3794 12.502 16.3408L11.7336 15.4407C11.7007 15.402 11.642 15.3991 11.6054 15.4343C11.5891 15.45 11.5701 15.4683 11.5486 15.489C11.5387 15.4985 11.5283 15.5086 11.5174 15.5191C11.5063 15.5299 11.4957 15.5397 11.4819 15.5538C11.4556 15.5804 11.4271 15.6091 11.3967 15.6398C11.3664 15.6705 11.3342 15.7032 11.3002 15.7377C11.2686 15.7719 11.2354 15.8079 11.2008 15.8454C11.1665 15.8832 11.1296 15.9213 11.0939 15.9631C11.0581 16.0046 11.0211 16.0476 10.983 16.0918C10.9444 16.1354 10.9071 16.1822 10.8687 16.2298C10.8306 16.2776 10.7905 16.3253 10.7521 16.3758C10.7139 16.4263 10.6751 16.4777 10.6358 16.5298C10.6158 16.5555 10.5967 16.5822 10.5779 16.6092Z"
      fill="white"
      fillOpacity="0.7"
    />
    <Path
      d="M9.18172 19.7649C9.17723 19.787 9.17197 19.8129 9.16601 19.8422C9.16055 19.8691 9.1545 19.8989 9.14792 19.9313C9.14146 19.9644 9.13514 20.0036 9.12809 20.0435C9.12115 20.0838 9.11377 20.1267 9.10601 20.172C9.10225 20.1945 9.09796 20.2178 9.09439 20.2413C9.09123 20.2647 9.08801 20.2885 9.0847 20.3129C9.0721 20.4105 9.05551 20.5155 9.04595 20.6276C9.04041 20.6835 9.03472 20.7409 9.0289 20.7996C9.0241 20.8583 9.0209 20.9185 9.01677 20.9795C9.0071 21.1014 9.00533 21.2278 9.00131 21.3556L9 21.4037L9.00023 21.452C9.00041 21.4842 9.00059 21.5165 9.00077 21.5489C9.00097 21.5812 9.00116 21.6136 9.00134 21.646L9.00165 21.6946L9.00351 21.7433C9.00614 21.808 9.00877 21.8728 9.0114 21.9372L9.01339 21.9855L9.01399 22.0011L9.01485 22.0127L9.01657 22.036C9.01886 22.067 9.02113 22.0979 9.02341 22.1287C9.02568 22.1595 9.02795 22.1901 9.03019 22.2206C9.03328 22.2524 9.03634 22.2841 9.03942 22.3156C9.04252 22.3471 9.0456 22.3783 9.04866 22.4094C9.05019 22.4249 9.05173 22.4403 9.05327 22.4557C9.05519 22.4709 9.0571 22.4859 9.059 22.501C9.06662 22.5609 9.07412 22.6199 9.08146 22.6776C9.09031 22.7351 9.09898 22.7913 9.10739 22.846C9.11526 22.9007 9.12541 22.9537 9.13473 23.0048C9.1355 23.0089 9.13627 23.013 9.13702 23.017C9.1448 23.0589 9.1812 23.0892 9.22374 23.0892H9.46158C9.51236 23.0892 9.55266 23.0464 9.54967 22.9957C9.54887 22.9822 9.54804 22.9685 9.54713 22.9547C9.54416 22.9054 9.54058 22.8546 9.53944 22.8021C9.53772 22.7497 9.53596 22.6958 9.53416 22.6408C9.53382 22.5859 9.53348 22.5297 9.53314 22.4726C9.53305 22.4583 9.53296 22.444 9.53287 22.4296C9.53317 22.4155 9.53349 22.4012 9.53382 22.3869C9.53444 22.3584 9.53507 22.3297 9.53571 22.3008C9.53634 22.272 9.53698 22.2429 9.53763 22.2138C9.53906 22.1832 9.54047 22.1525 9.54192 22.1217C9.54335 22.0908 9.5448 22.0599 9.54624 22.0288L9.54733 22.0055L9.54786 21.9938L9.54794 21.9924C9.54794 21.9887 9.54801 21.9958 9.54804 21.9946L9.54826 21.9918L9.54871 21.9861L9.55232 21.941C9.55712 21.8808 9.56193 21.8204 9.56676 21.7599L9.57045 21.7147L9.57565 21.6696C9.57913 21.6396 9.58258 21.6096 9.58603 21.5797C9.58947 21.5497 9.59291 21.5199 9.59632 21.4901L9.60142 21.4456L9.60803 21.4014C9.62614 21.2838 9.64152 21.1682 9.66407 21.0575C9.67465 21.002 9.68411 20.9474 9.69498 20.8943C9.7068 20.8414 9.71836 20.7896 9.72962 20.7392C9.75045 20.6382 9.77745 20.5444 9.79943 20.4574C9.80506 20.4357 9.81058 20.4144 9.81596 20.3937C9.82165 20.3732 9.82779 20.3539 9.83345 20.3347C9.84484 20.2965 9.85567 20.2603 9.86583 20.2263C9.87623 20.1919 9.88477 20.1612 9.89472 20.1304C9.90515 20.099 9.91471 20.0702 9.92337 20.0442C9.93278 20.0158 9.9411 19.9908 9.94822 19.9693C9.96424 19.9211 9.93627 19.8694 9.88717 19.8564L9.29093 19.6974C9.24181 19.6842 9.19185 19.7151 9.18172 19.7649Z"
      fill="white"
      fillOpacity="0.7"
    />
    <Path
      d="M15.9309 22.8553C16.1249 22.9501 16.3304 22.9951 16.5327 22.9951C17.0405 22.9951 17.5285 22.7122 17.7666 22.2252C17.8124 22.1315 17.8479 22.028 17.871 21.9305L19.2592 15.9051L19.7879 13.6104L20.1154 12.1889C20.1535 12.0235 20.0219 11.9108 19.8899 11.9108C19.8126 11.9108 19.7352 11.9494 19.6915 12.0387L19.025 13.4019L18.0418 15.4131L15.3008 21.0197C14.9679 21.7006 15.25 22.5224 15.9309 22.8553ZM16.5836 20.9149C16.955 20.9149 17.2562 21.2161 17.2562 21.5875C17.2562 21.959 16.955 22.2602 16.5836 22.2602C16.2121 22.2602 15.9109 21.959 15.9109 21.5875C15.9109 21.216 16.2121 20.9149 16.5836 20.9149Z"
      fill="white"
    />
  </Svg>
);

export default Speedometer;
