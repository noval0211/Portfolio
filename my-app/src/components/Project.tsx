import dataProject from "../json/project.json"

export default function Project() {

    const data = dataProject.project
    const dataLength = data.length

    return (
        <>
            <div className="flex flex-col pt-30 md:pt-20">
                <div className="flex flex-col items-center justify-center md:gap-5 text-[var(--color)]">
                    <a className="text-4xl font-bold text-green-500 text-shadow-blue-500 text-shadow-lg">Project</a>
                    <div className="p-10 md:p-0 lg:w-1/2 text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent  opacity-70">
                        <a className="font-bold">Here is a web application I worked on to demonstrate my skills in web application development.</a>
                    </div>
                </div>
                <div className={`grid ${dataLength == 1 ? 'lg:scale-75' : 'lg:grid-cols-2 xl:mt-20'} origin-top gap-10 xl:gap-y-20 lg:px-10 mt-10 md:mt-20 `}>
                    {data.map((items, index) => (
                        <div
                            key={index}
                            className="relative bg-neutral-900 p-2 rounded-md scale-90 lg:scale-100 ">
                            <div className="absolute -top-9 left-0 bg-neutral-900 text-[var(--color)] capitalize px-4 max-w-full truncate py-1 rounded-md">
                                {items.title}
                            </div>
                            <div className="aspect-video  overflow-hidden rounded-md">
                                <iframe
                                    src={items.url}
                                    onLoad={(e) => {
                                        const doc = e.currentTarget.contentDocument;
                                        if (!doc) return
                                        doc.body.style.overflow = "hidden"
                                    }}
                                    className={`w-[200%] h-[200%] ${dataLength == 1 && 'xl:w-full xl:h-full xl:scale-100'} scale-50 origin-top-left rounded-md`}
                                />
                            </div>
                            <div className="text-[var(--color)] px-3 mt-2">
                                <p className="mt-2 opacity-70">
                                    {items.describe}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}