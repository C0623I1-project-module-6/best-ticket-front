import PropTypes from "prop-types";


InputFieldDate.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
};
InputFieldDate.propTypes = {
    type: "",
    label: "",
    disabled: false,
    hidden: false,
};
export default function InputFieldDate(props) {
    const {
        field, form,
        type, label, placeholder, disabled, hidden,
    } = props;
    const {name} = field;
    return (
        <div>
            <label htmlFor={name} className="block text-1xl font-serif text-gray-700">{label}</label>
            <div className="mt-2">
                <input
                    id={name}
                    {...field}

                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    hidden={hidden}
                    className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                           ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                           focus:ring-indigo-60 sm:text-1xl sm:font-serif sm:leading-6"/>
            </div>
        </div>
    )
}