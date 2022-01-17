import { useField, FieldConfig } from 'formik'

interface Values extends FieldConfig{
    label: string;
    name: string;
}

export const TextField = ({label, ...props}:Values) => {
    const [field, meta] = useField<Values>(props.name);
    return(
        <>
            <div>
                <label>{label}</label>
                <input {...field} {...props}/>
            </div>
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </>
    )

}