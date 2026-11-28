function Svg({ children, size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={'inline-block shrink-0 ' + className}
    >
      {children}
    </svg>
  )
}

export const CheckIcon = (p) => <Svg {...p}><path d="M5 13l4 4L19 7" /></Svg>
export const PhoneIcon = (p) => (
  <Svg {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </Svg>
)
export const PinIcon = (p) => (
  <Svg {...p}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
)
export const ClockIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Svg>
)
export const DiamondIcon = (p) => <Svg {...p}><path d="M6 3h12l4 6-10 12L2 9z" /></Svg>
export const PencilIcon = (p) => (
  <Svg {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </Svg>
)
export const ShieldIcon = (p) => <Svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Svg>
export const TruckIcon = (p) => (
  <Svg {...p}>
    <rect x="1" y="3" width="15" height="13" />
    <path d="M16 8h4l3 3v5h-7z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </Svg>
)
export const ArrowRightIcon = (p) => <Svg {...p}><path d="M5 12h14M12 5l7 7-7 7" /></Svg>
export const ArrowUpRightIcon = (p) => <Svg {...p}><path d="M7 17L17 7M7 7h10v10" /></Svg>
export const SparkleIcon = (p) => <Svg {...p}><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" /></Svg>
export const MenuIcon = (p) => <Svg {...p}><path d="M3 6h18M3 12h18M3 18h18" /></Svg>
export const CloseIcon = (p) => <Svg {...p}><path d="M6 6l12 12M18 6L6 18" /></Svg>
