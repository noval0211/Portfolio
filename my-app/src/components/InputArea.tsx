
interface formProps {
    label: string,
    placeholder: string,
}

export default function InputArea({ label, placeholder }: formProps) {
    return (
        <>
            <div className="flex flex-col gap-2 p-2 text-[var(--color)]">
                <label className="w-30 font-bold">
                    {label}
                </label>
                <textarea
                    placeholder={placeholder}
                    className="bg-[var(--background)] px-3 py-2 min-h-40 outline-2 outline-[var(--color)] rounded-md"
                />
            </div>
        </>
    )
} 