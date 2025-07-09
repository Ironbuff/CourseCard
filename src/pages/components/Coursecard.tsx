import { ArrowRight } from 'lucide-react'
import React from 'react'



interface valuedata{
    id:number,
    url:string,
    titlename:string,

}

const Coursecard = ({
    value
}:{value:valuedata[]}) => {
  return (
    <div className='flex flex-col gap-y-2 '>
        <p className='flex flex-row gap-x-2 items-center justify-end text-neutral-100 font-semibold'>
            View All Courses <ArrowRight className='text-neutral-100' />
        </p>
        {/* icon Section */}
        <div className='flex flex-row gap-x-5 items-center'>
            {value.map((item)=>(
                <img key={item.id} src={item.url} alt={item.titlename} className=' w-10 h-10 rounded-xl rotate-[-60]'/>
            ))}
        </div>

    </div>
  )
}

export default Coursecard