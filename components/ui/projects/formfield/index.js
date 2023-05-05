
const formField = ({label,is_textArea, placeholder, value, type, handler}) => {
  return (
    <div className="form-field">
        <label className="form-label">{label}</label>
        {is_textArea ? 
            <textarea 
            className="form-textArea" 
            value={value} 
            placeholder= {placeholder} 
            required
            onChange={handler}
            >
            </textarea>:
            <input type={type}
            className="form-input" 
            placeholder={placeholder} 
            value={value} 
            required
            onChange={handler} 
            />
        }
    </div>
  )
}

export default formField
