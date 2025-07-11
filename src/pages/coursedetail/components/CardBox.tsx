



interface datatype{
    heading:string,
    summary:string,
    detail:string,
    icon:string
    id:number,
    bg:string
}

const CardBox = ({value}:{value:datatype[]}) => {
  return (
   <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-6">
   {value.map((item)=>(
    <div key={item.id} className={`${item.bg}  rounded-2xl flex h-[15rem] w-full relative flex-row gap-x-6`}>
       <div className="absolute left-0 ">
              <img src={item.icon} className="w-50 h-50 object-contain"/>
       </div>
       <div className="flex flex-col gap-y-3 items-start justify-center">
        {/* top heading part */}
        <div className="flex flex-col gap-y-2 text-neutral-50 ">
          <h1 className="text-2xl font-semibold">
            {item.heading}
          </h1>
          <p className="text-lg font-medium">
            {item?.summary}
          </p>
        </div>
                {/*bottom detail  */}
              <p className="text-sm font-light text-neutral-50">
                {item.detail}
              </p>
       </div>
    </div>
   ))}

   </div>
  )
}

export default CardBox