

interface datatype{
    id:number,
    title:string,
    desc:string,
    Count:string,
}

const Coursetitle = ({value}:{value:datatype[]}) => {
  return (
    <div className="flex  gap-x-3">
        {
            value.map((item)=>(
                <div key={item.id} className="flex flex-col items-center rounded-2xl  gap-y-10 justify-center  h-[22rem] w-[9rem] bg-red-100">
                    <div className="flex flex-col items-center justify-center rotate-[-90deg]  text-red-500 ">
                        <h2 className="font-bold text-2xl font-sans">
                            {item.title}
                        </h2>
                        <p className="text-sm font-extralight w-full ">
                            {item.desc}
                        </p>
                    </div>
                    <div className="flex item-center">
                        <h1 className="relative text-7xl font-extrabold font-sans text-red-500">
                            {item.Count}
                            <span className="absolute top-0 text-3xl">
                                +
                            </span>
                        </h1>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Coursetitle