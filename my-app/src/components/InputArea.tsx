
interface formProps {
    label: string,
    placeholder: string,
    valueName: string,
    setValue: (value: string) => void
}

export default function InputArea({ label, placeholder, valueName, setValue }: formProps) {
    return (
        <>
            <div className="flex flex-col gap-2 p-2 text-[var(--color)]">
                <label className="w-30 font-bold">
                    {label}
                </label>
                <textarea
                    placeholder={placeholder}
                    value={valueName}
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-[var(--background)] px-3 py-2 min-h-40 outline-1 outline-[var(--color)] rounded-md"
                />
            </div>
        </>
    )
} 