import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const valyse: CustomThemeConfig = {
  name: 'valyse',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `"Inter Variable"`,
    '--theme-font-family-heading': `"Outfit Variable"`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '8px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': 'var(--color-surface-900)',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '0 0 0',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': 'var(--color-surface-900)',
    '--on-surface': 'var(--color-surface-50)',
    // =~= Theme Colors  =~=
    // primary | #3DAFFE
    '--color-primary-50': '226 243 255', // #e2f3ff
    '--color-primary-100': '216 239 255', // #d8efff
    '--color-primary-200': '207 235 255', // #cfebff
    '--color-primary-300': '177 223 255', // #b1dfff
    '--color-primary-400': '119 199 254', // #77c7fe
    '--color-primary-500': '61 175 254', // #3DAFFE
    '--color-primary-600': '55 158 229', // #379ee5
    '--color-primary-700': '46 131 191', // #2e83bf
    '--color-primary-800': '37 105 152', // #256998
    '--color-primary-900': '30 86 124', // #1e567c
    // secondary | #4F46E5
    '--color-secondary-50': '229 227 251', // #e5e3fb
    '--color-secondary-100': '220 218 250', // #dcdafa
    '--color-secondary-200': '211 209 249', // #d3d1f9
    '--color-secondary-300': '185 181 245', // #b9b5f5
    '--color-secondary-400': '132 126 237', // #847eed
    '--color-secondary-500': '79 70 229', // #4F46E5
    '--color-secondary-600': '71 63 206', // #473fce
    '--color-secondary-700': '59 53 172', // #3b35ac
    '--color-secondary-800': '47 42 137', // #2f2a89
    '--color-secondary-900': '39 34 112', // #272270
    // tertiary | #0EA5E9
    '--color-tertiary-50': '219 242 252', // #dbf2fc
    '--color-tertiary-100': '207 237 251', // #cfedfb
    '--color-tertiary-200': '195 233 250', // #c3e9fa
    '--color-tertiary-300': '159 219 246', // #9fdbf6
    '--color-tertiary-400': '86 192 240', // #56c0f0
    '--color-tertiary-500': '14 165 233', // #0EA5E9
    '--color-tertiary-600': '13 149 210', // #0d95d2
    '--color-tertiary-700': '11 124 175', // #0b7caf
    '--color-tertiary-800': '8 99 140', // #08638c
    '--color-tertiary-900': '7 81 114', // #075172
    // success | #00b32d
    '--color-success-50': '217 244 224', // #d9f4e0
    '--color-success-100': '204 240 213', // #ccf0d5
    '--color-success-200': '191 236 203', // #bfeccb
    '--color-success-300': '153 225 171', // #99e1ab
    '--color-success-400': '77 202 108', // #4dca6c
    '--color-success-500': '0 179 45', // #00b32d
    '--color-success-600': '0 161 41', // #00a129
    '--color-success-700': '0 134 34', // #008622
    '--color-success-800': '0 107 27', // #006b1b
    '--color-success-900': '0 88 22', // #005816
    // warning | #f5a10f
    '--color-warning-50': '254 241 219', // #fef1db
    '--color-warning-100': '253 236 207', // #fdeccf
    '--color-warning-200': '253 232 195', // #fde8c3
    '--color-warning-300': '251 217 159', // #fbd99f
    '--color-warning-400': '248 189 87', // #f8bd57
    '--color-warning-500': '245 161 15', // #f5a10f
    '--color-warning-600': '221 145 14', // #dd910e
    '--color-warning-700': '184 121 11', // #b8790b
    '--color-warning-800': '147 97 9', // #936109
    '--color-warning-900': '120 79 7', // #784f07
    // error | #ff1f1f
    '--color-error-50': '255 221 221', // #ffdddd
    '--color-error-100': '255 210 210', // #ffd2d2
    '--color-error-200': '255 199 199', // #ffc7c7
    '--color-error-300': '255 165 165', // #ffa5a5
    '--color-error-400': '255 98 98', // #ff6262
    '--color-error-500': '255 31 31', // #ff1f1f
    '--color-error-600': '230 28 28', // #e61c1c
    '--color-error-700': '191 23 23', // #bf1717
    '--color-error-800': '153 19 19', // #991313
    '--color-error-900': '125 15 15', // #7d0f0f
    // surface | #1E1E1E
    '--color-surface-50': '221 221 221', // #dddddd
    '--color-surface-100': '210 210 210', // #d2d2d2
    '--color-surface-200': '199 199 199', // #c7c7c7
    '--color-surface-300': '165 165 165', // #a5a5a5
    '--color-surface-400': '98 98 98', // #626262
    '--color-surface-500': '30 30 30', // #1E1E1E
    '--color-surface-600': '27 27 27', // #1b1b1b
    '--color-surface-700': '23 23 23', // #171717
    '--color-surface-800': '18 18 18', // #121212
    '--color-surface-900': '15 15 15', // #0f0f0f
  },
};
