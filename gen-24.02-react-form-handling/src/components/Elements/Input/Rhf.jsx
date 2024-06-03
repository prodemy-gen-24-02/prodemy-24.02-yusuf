import { forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

const InputRhf = forwardRef((props, ref) => {
    const {
        label,
        name,
        type,
        placeholder,
        onChange,
        value,
        className,
        rhf = {},
    } = props;
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <Input
                {...rhf}
                type={type}
                placeholder={placeholder}
                ref={ref}
                onChange={onChange}
                value={value}
                className={className}
            />
        </div>
    );
});

InputRhf.displayName = "InputRhf";

export default InputRhf;
