const FormValidations = {
  name: {
    required: { value: true, message: 'name is must.....!' },
    minLength: { value: 3, message: 'name have at least 3 letters.....!' },
    maxLength: { value: 7, message: 'name must contain only 7 letters.....' },
    pattern: { value: /^[A-Z][a-zA-Z]+$/, message: 'Name must start with uppercase and contain only letters.' }
  },
  username: {
    required: { value: true, message: 'name is must.....!' },
    minLength: { value: 5, message: 'name have at least 5 letters.....!' },
    maxLength: { value: 10, message: 'name must contain only 10 letters.....' },
    pattern: { value: /^[A-Z][a-zA-Z0-9]*$/, message: 'Username must start with uppercase and contain only letters or numbers.' }
  },
  password: {
    required: { value: true, message: 'name is must.....!' },
    minLength: { value: 5, message: 'name have at least 5 letters.....!' },
    maxLength: { value: 8, message: 'name must contain only 8 letters.....' },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
      message: 'Password must include uppercase, lowercase, number and special character.'
    }
  }
}

export default FormValidations;