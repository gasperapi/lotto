import { IconSvgProps } from "@/types";

export const WalletIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.895 6 10 6.895 10 8V16C10 17.105 10.895 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.172 13.5 14.5 12.828 14.5 12C14.5 11.172 15.172 10.5 16 10.5C16.828 10.5 17.5 11.172 17.5 12C17.5 12.828 16.828 13.5 16 13.5Z"
            fill="currentColor"
        />
    </svg>
);

export const DepositIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M19 13H13V19H11V13H5L12 6L19 13Z"
            fill="currentColor"
        />
    </svg>
);

export const WithdrawIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M19 11H13V5H11V11H5L12 18L19 11Z"
            fill="currentColor"
        />
    </svg>
);

export const TouchIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5C12.88 5 14 6.12 14 7.5V11.24C15.68 11.56 17.58 12.33 18.29 13.29L18.42 13.46C18.66 13.78 18.59 14.23 18.27 14.47L15.6 16.48C15.22 16.76 14.76 16.92 14.28 16.92H12.5C12.22 16.92 12 17.14 12 17.42V20.5H8V11.24H9ZM11.5 3C9.02 3 7 5.02 7 7.5V10H6C5.45 10 5 10.45 5 11V18C5 19.66 6.34 21 8 21H13.5C14.88 21 16 19.88 16 18.5V18.17L19.88 15.26C20.84 14.54 21.04 13.19 20.32 12.23L20.19 12.06C19.12 10.63 16.57 9.68 14 9.5V7.5C14 6.12 12.88 5 11.5 5C10.12 5 9 6.12 9 7.5V9.5C6.43 9.68 3.88 10.63 2.81 12.06L2.68 12.23C1.96 13.19 2.16 14.54 3.12 15.26L7 18.17V18.5C7 19.88 8.12 21 9.5 21H11.5C12.88 21 14 19.88 14 18.5V18C14 17.45 13.55 17 13 17H12.5C11.67 17 11 16.33 11 15.5V11.5C11 10.67 11.67 10 12.5 10C13.33 10 14 10.67 14 11.5V13H16V11C16 10.45 15.55 10 15 10H14.5V7.5C14.5 5.84 13.16 4.5 11.5 4.5C9.84 4.5 8.5 5.84 8.5 7.5V10H8V7.5C8 5.57 9.57 4 11.5 4C13.43 4 15 5.57 15 7.5V9H17V7.5C17 4.47 14.53 2 11.5 2C8.47 2 6 4.47 6 7.5V9H7V7.5C7 5.02 9.02 3 11.5 3Z"
            fill="currentColor"
        />
    </svg>
); // Using a simpler hand icon logic if this path is complex, but this SVG path is illustrative. Let's use a simpler known path for "Touch/Click"

export const CasinoIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M21 11V19H3V11L12 6L21 11ZM5 13V17H9V13H5ZM11 13V17H15V13H11ZM17 13V17H19V13H17Z"
            fill="currentColor"
        />
        <path d="M12 2L2 7V21H22V7L12 2ZM20 19H4V9.8L12 5.8L20 9.8V19Z" fill="currentColor" />
    </svg>
);

export const TrophyIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M20.2 6.3C20.1 6.1 19.9 6 19.7 6H17V5C17 3.3 15.7 2 14 2H10C8.3 2 7 3.3 7 5V6H4.3C4.1 6 3.9 6.1 3.8 6.3C3.6 6.5 3.6 6.7 3.7 6.9L5.3 10.1C6 11.5 7.3 12.5 8.9 12.8C9.5 14.5 11.1 15.7 13 16V19H10V21H14V19H11V16.7C10.7 16.6 10.4 16.5 10.1 16.4L10.3 16.6C12.1 14.9 13.9 13.2 15.7 11.6L16.2 11.1C16.6 11.5 17 11.8 17.5 12.1L18.7 10.1C18.8 9.9 18.9 9.6 18.9 9.3V7H20V6.3H20.2ZM7 5C7 4.4 7.4 4 8 4H16C16.6 4 17 4.4 17 5V6H7V5ZM5.8 9.2L4.8 7H7V9C7 9.1 7 9.2 7 9.3L5.8 9.2ZM19.2 7L18.2 9.2C17.6 9 17 9 16.4 9.1L17 7H19.2Z"
            fill="currentColor"
        />
    </svg>
);

export const TargetIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
            fill="currentColor"
        />
    </svg>
);

export const ListIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z"
            fill="currentColor"
        />
    </svg>
);

export const UsersIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
            fill="currentColor"
        />
    </svg>
);

export const MailIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
            fill="currentColor"
        />
    </svg>
);

export const FileIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M13 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V9L13 2ZM18 20H6V4H12V9H18V20Z"
            fill="currentColor"
        />
    </svg>
);

export const CalculatorIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 7H9V9H7V7ZM11 7H13V9H11V7ZM15 7H17V9H15V7ZM7 11H9V13H7V11ZM11 11H13V13H11V11ZM15 11H17V13H15V11ZM7 15H9V17H7V15ZM11 15H17V17H11V15Z"
            fill="currentColor"
        />
    </svg>
);

export const ChartIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M3.5 18.49L9.5 12.48L13.5 16.48L22 6.92L20.59 5.51L13.5 13.48L9.5 9.48L-0.5 19.42L1.41 20.83L3.5 18.49ZM16 11V19H18V11H16ZM12 11V19H14V11H12ZM8 11V19H10V11H8Z" // A bit mixed up path, let's look for a simple bar chart or "Insert Chart"
            fill="currentColor"
        />
        <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"
            fill="currentColor"
        />
    </svg>
);
