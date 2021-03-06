import { FC } from 'react'
import { useField } from 'formik'
import './InputField.scss'
/**
 * DEFINITION FOR INPUT FIELDS
 */
type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  textarea?: boolean
  helperText?: string
}
/**
 * INPUT FIELD
 */
const InputField: FC<InputFieldProps> = ({
  children,
  label,
  textarea = false,
  helperText,
  ...props
}) => {
  const [field, { error, touched }] = useField(props)
  const propsToSpread = {
    id: field.name,
    type: props.type,
    placeholder: props.placeholder,
    className: props.className,
    autoComplete: props.autoComplete,
    min: props.min,
    max: props.max,
  }

  return (
    <div className="form-control">
      <label className="label" htmlFor={field.name}>
        {label}
      </label>
      {textarea ? (
        <textarea rows={4} {...propsToSpread} {...field} />
      ) : (
        <input {...propsToSpread} {...field} />
      )}
      {helperText && <small>{helperText}</small>}
      {touched && error && <small className="errorText">{error}</small>}
    </div>
  )
}

export default InputField
