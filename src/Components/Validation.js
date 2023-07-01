import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup  
        .string()
        .trim()
        .min("name must be at least 2 characters")
        .required("Username is required")
})

export default formSchema;