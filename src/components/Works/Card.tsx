import { getImageUrl } from '@/utils/index'

function Card({ data, children, ...props }) {
  return (
    <>
      <li {...props}>
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={data.imgLink}
            alt={data.imgLink}
            className="object-cover object-center w-full h-full rounded-lg"
          />
        </div>
        <div className="pt-4 px-2">
          <p className="font-bold text-lg">{data.title}</p>
          <p className="text-[#919191] text-sm">{data.description}</p>
        </div>
        <ul className="flex gap-x-2 gap-y-20 pt-3 overflow-hidden whitespace-nowrap px-2">
          {data.tags.map((item, idx) => (
            <li
              key={idx}
              className="text-xs font-thin bg-[#F1F1F1] rounded-full py-0.5 px-2 overflow-hidden text-ellipsis"
            >
              {item}
            </li>
          ))}
        </ul>
      </li>
    </>
  )
}

export default Card
