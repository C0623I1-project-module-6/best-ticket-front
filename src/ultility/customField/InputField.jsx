import PropTypes from "prop-types";
import {ErrorMessage} from "formik";
import {FormFeedback} from "reactstrap";

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
};
InputField.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    disabled: false,
    hidden: false,
};
export default function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled, hidden,
    } = props;
    const {name,value} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    return (
        <div>
            <label htmlFor={name} className="block text-1xl font-serif text-gray-700">
                {label}
                {showError &&
                    <span className="m-2 text-red-500 text-1xl">*</span>}
            </label>
            <div className="mt-2">
                <input
                    id={name}
                    value={value}
                    {...field}

                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    hidden={hidden}
                    className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                           ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                           focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                           sm:text-1xl sm:leading-6"

                />
            </div>
            <ErrorMessage name={name}
                          component={FormFeedback}
                          className="text-sm font-serif text-red-500"/>
        </div>
    )
}