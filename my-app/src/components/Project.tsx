import dataProject from "../json/project.json"

export default function Project() {

    const data = dataProject.project
    const dataLength = data.length

    return (
        <>
            <div className="flex flex-col gap-20 py-20">
                <div className="flex flex-col items-center justify-center gap-5 text-[var(--color)]">
                    <a className="text-4xl font-bold">P r o j e c t</a>
                    <span className="w-1/2 text-center opacity-70">Here is a web application I worked on, to demonstrate my skills in web application development.</span>
                </div>
                <div className={`grid ${dataLength == 1 ? 'grid-cols-1 scale-75 -mt-20' : 'grid-cols-2 mt-10'} gap-10 gap-y-20 px-20`}>
                    {data.map((items, index) => (
                        <div
                            key={index}
                            className="relative bg-neutral-900 p-2 rounded-md">
                            <div className="absolute -top-9 left-0 bg-neutral-900 text-[var(--color)] capitalize px-4 max-w-full truncate py-1 rounded-md">
                                {items.title}
                            </div>
                            <div className="aspect-video overflow-hidden rounded-md">
                                <iframe
                                    src={items.url}
                                    onLoad={(e) => {
                                        const doc = e.currentTarget.contentDocument;
                                        if (!doc) return
                                        doc.body.style.overflow = "hidden"
                                    }}
                                    className={`${dataLength == 1 ? 'w-full h-full' : 'w-[200%] h-[200%] scale-50 origin-top-left'} rounded-md`}
/>
                            </div>
                            <div className="text-[var(--color)] px-3 mt-2">
                                <p className="mt-2 opacity-70 text-sm">
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