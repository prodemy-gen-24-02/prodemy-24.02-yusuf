/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const {
        type,
        placeholder,
        name,
        value,
        onChange,
        className,
        register = () => {},
    } = props;
    return (
        <input
            {...register(name)}
            type={type}
            className={`text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder:opacity-50 mb-3 ${className}`}
            placeholder={placeholder}
            name={name}
            id={name}
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
});

Input.displayName = "Input";

export default Input;
