type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  labelColor: string;
  borderColor: string;
  placeholderColor: string;
  autoComplete?: string;
};

export default function Field({ label, name, type = "text", placeholder, labelColor, borderColor, placeholderColor, autoComplete }: Props) {
  return (
    <label className="flex flex-col gap-[5px]">
      <span className="text-[14px] font-medium leading-5" style={{ color: labelColor }}>{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="box-border h-[52px] w-[453px] rounded-[12px] border border-solid border-[var(--field-border)] bg-white px-6 py-3 text-[18px] leading-7 text-[#242528] outline-none placeholder:text-[var(--ph)] focus:!border-brand-blue"
        style={{ ["--field-border" as string]: borderColor, ["--ph" as string]: placeholderColor }}
      />
    </label>
  );
}
