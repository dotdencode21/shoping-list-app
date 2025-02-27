import { Checkbox } from "@/components/ui/checkbox";

interface BaseCheckboxProps {
  id: string;
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

export function BaseCheckbox({ id, checked, onChange, label }: BaseCheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} checked={checked} onCheckedChange={(checked) => onChange(!!checked)} className="size-6" />
      <label htmlFor={id} className="cursor-pointer text-sm text-neutral-100">
        {label}
      </label>
    </div>
  );
}
