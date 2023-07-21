import * as yup from 'yup';

export const newsletterSchema = yup
  .object({
    email: yup.string().required('Email is required').email('Invalid format. Must contain @'),
  })
  .required();

export const formSchema = yup
  .object({
    email: yup.string().required('Email is required').email('Invalid format. Must contain @'),
    fullName: yup.string().required('Full Name is required'),
    query: yup.string().required('Query is required'),
    message: yup.string().required('Message is required'),
  })
  .required();
