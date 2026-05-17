import Image from 'next/image'

type LogoProps = {
  variant?: 'icon' | 'full'
  showText?: boolean
  className?: string
  iconClassName?: string
}

export default function Logo({
  variant = 'icon',
  showText = false,
  className = '',
  iconClassName = '',
}: LogoProps) {
  const src = variant === 'full' ? '/logo.svg' : '/logo-icon.svg'
  const iconWidth = variant === 'full' ? 120 : 44
  const iconHeight = variant === 'full' ? 160 : 44

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={src}
        alt="Digitopia Inc"
        width={iconWidth}
        height={iconHeight}
        className={`h-11 w-auto object-contain ${iconClassName}`}
        priority
      />
      {showText && (
        <span className="text-white font-semibold text-lg tracking-tight">
          Digitopia Inc
        </span>
      )}
    </div>
  )
}

