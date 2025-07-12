interface datatype {
  heading: string;
  summary: string;
  detail: string;
  icon: string;
  id: number;
  bg: string;
  position:string,
  flex:string,
}

const CardBox = ({ value }: { value: datatype[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto p-5">
      {value.map((item) => (
        <div
          key={item.id}
          className={`${item.bg} rounded-2xl  flex h-[15rem] relative w-full flex-row gap-x-6 p-6 items-center`}
        >
          <div className={`absolute ${item.position} z-10`}>
            <img src={item.icon} className="w-[26rem] h-[26rem] object-fill " />
          </div>
          <div className={`flex flex-col gap-y-3 ${item.flex} justify-center text-neutral-50`}>
            {/* top heading part */}
            <div className={`flex flex-col gap-y-2 ${item.flex}`}>
              <h1 className="text-2xl font-semibold">{item.heading}</h1>
              <p className="text-lg font-medium ">{item?.summary}</p>
            </div>
            {/* bottom detail */}
            <p className="text-sm font-light w-[60%]">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBox;
