

export default function Footer() {
    return (
        <>
            <div className="bg-neutral-900 text-[var(--color)] flex items-center justify-between p-10">
                <div className="flex flex-col gap-2">
                    <a className="font-bold">Portfolio</a>
                    <a className="text-sm opacity-70">Designed and built with react tecnology</a>
                </div>
                <span>
                    © 2025 All rights reserved.
                </span>
            </div>
        </>
    )
}