import { ComponentProps } from "react";
import { Input } from "../ui/input";

export default function SearchInput({ value, onChange, placeholder }: ComponentProps<"input">) {
  return (
    <Input
      type="search"
      className="bg-neutral-100 placeholder:text-sm"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
