import PropTypes from "prop-types";
import {ErrorMessage} from "formik";
import {FormFeedback, FormGroup, Label} from "reactstrap";

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
};
InputField.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    className: "",
    disabled: false,
};
export default function InputField(props) {
    const {
        field, form,
        type,
        label,
        placeholder,
        disabled,
        hidden,
        className,
    } = props;
    const {name, value} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    return (
        <FormGroup>
            <Label htmlFor={name} className="block text-1xl font-serif text-gray-700">
                {label}
                {showError &&
                    <span className="m-2 text-red-500 text-1xl">*</span>}
            </Label>
            <FormGroup className="mt-2">
                <input
                    id={name}
                    {...field}

                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    hidden={hidden}
                    className={className}
                />
            </FormGroup>
            <ErrorMessage name={name}
                          component={FormFeedback}
                          className="text-sm font-serif text-red-500"/>
        </FormGroup>
    )
}