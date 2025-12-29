
interface formProps {
    label: string,
    type: string,
    placeholder: string,
    valueName: string,
    setValue: (value: string) => void
}

export default function InputForm({ label, type, placeholder, valueName, setValue }: formProps) {
    return (
        <>
            <div className="flex flex-col gap-2 p-2 text-[var(--color)]">
                <label className="w-30 font-bold">
                    {label}
                </label>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="bg-[var(--background)] px-3 py-2 outline-1 outline-[var(--color)] rounded-md"
                    value={valueName}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </>
    )
} 