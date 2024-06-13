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
        register,
    } = props;
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <Input
                register={register}
                type={type}
                name={name}
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
