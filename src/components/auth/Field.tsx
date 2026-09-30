import styles from "./Field.module.css";

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
    <label className={styles.field}>
      <span style={{ color: labelColor }}>{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{ borderColor, ["--ph" as string]: placeholderColor }}
      />
    </label>
  );
}
