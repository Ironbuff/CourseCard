import { ArrowRight } from 'lucide-react'




interface valuedata{
    id:number,
    url:string,
    titlename:string,
    rotate:string

}

const Coursecard = ({
    value
}:{value:valuedata[]}) => {
  return (
    <div className='flex flex-col gap-y-10 items-center  justify-center h-full w-full '>
        <p className='flex flex-row gap-x-2 items-center w-full justify-end text-neutral-100 font-semibold text-sm'>
            View All Courses <ArrowRight className='text-neutral-100' size={15} />
        </p>
        {/* icon Section */}
        <div className='flex flex-row gap-x-5 items-center'>
            {value.map((item)=>(
                <img key={item.id} src={item.url} alt={item.titlename} className={` w-16 h-16 rounded-xl ${item.rotate} `}/>
            ))}
        </div>

    </div>
  )
}

export default Coursecard