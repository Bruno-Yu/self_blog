import { FunctionComponent, useMemo, type CSSProperties } from 'react'
import { getImageUrl } from '@/utils/index'

export type ServiceCardType = {
  className?: string
  serviceItem?: string
  prop?: string

  /** Style props */
  propMinWidth?: CSSProperties['minWidth']
}

const ServiceCard: FunctionComponent<ServiceCardType> = ({
  className = '',
  serviceItem,
  prop,
  propMinWidth,
}) => {
  const b5Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    }
  }, [propMinWidth])

  return (
    <div
      className={`relative flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-6 min-w-[229px] max-w-[306px] h-[306px] text-left text-3xl text-white font-normal bg-[url('@/assets/images/service-item-bg.png')]   ${className}`}
    >
      {/* 内容容器 */}
      <div className="relative z-10 flex flex-col items-center justify-start gap-6 w-full h-full">
        <div className="flex flex-row items-start justify-start py-0 px-4">
          <img
            className="h-20 w-20 relative overflow-hidden shrink-0"
            alt=""
            src={getImageUrl(serviceItem, 'svg')}
          />
        </div>
        <b
          className="relative leading-[42px] inline-block min-w-[112px] mq450:text-3xl mq450:leading-[34px]"
          style={b5Style}
        >
          {prop}
        </b>
      </div>
    </div>
  )
}

export default ServiceCard
