import { fontTitle } from '@/lib/fonts'

export default function MainText ({children}) {
  return (
    <h1
      className={`
        ${fontTitle.className}
        text-6xl
        text-golden
        mt-14
        text-center
      `}
    >
      {children}
    </h1>
  )
}