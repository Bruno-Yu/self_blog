import { getImageUrl } from '@/utils/index'

function Card({ data, children, ...props }) {
  return (
    <>
      <li {...props}>
        <img
          src={getImageUrl(data.imgLink)}
          alt={data.imgLink}
          className="w-full h-auto rounded-lg"
        />
        <div className="pt-4 px-2">
          <p className="font-bold text-lg">{data.title}</p>
          <p className="text-[#919191] text-sm">{data.description}</p>
        </div>
        <ul className="flex gap-x-6 gap-y-20 pt-3">
          {data.tags.map((item, idx) => (
            <li
              key={idx}
              className="text-xs font-thin bg-[#F1F1F1] rounded-full py-0.5 px-2"
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
