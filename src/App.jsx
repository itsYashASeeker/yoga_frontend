import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import CheckboxImage from "./assets/checkbox.png"


export default function App() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    date_of_birth: Yup.date()
      .required('Date of Birth is required')
      .test('age-limit', 'Age must be between 18 and 65', function (value) {
        const age = moment().diff(moment(value), 'years');
        return age >= 18 && age <= 65;
      }),
    contact_number: Yup.string()
      .required('Contact number is required')
      .matches(/^\d{10}$/, 'Contact number must be 10 digits'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    batch_id: Yup.string().required('Batch selection is required'),
    month: Yup.string().required('Month is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      date_of_birth: '',
      contact_number: '',
      email: '',
      batch_id: '',
      month: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setSuccess(false);


      setSuccess(true);
      setLoading(false);

    },
  });

  return (
    <div className="font-serif flex justify-center items-center gap-12 flex-col h-screen py-8 overflow-auto">
      <p className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Yoga Admission form</p>
      {success ?
        <div className='w-full flex justify-center items-center flex-col gap-12'>
          <img width={150} src={CheckboxImage} />
          <p className='text-2xl text-green-700'>Form Submitted Successfully!!</p>
        </div> :
        <div className='w-full sm:w-3/4 md:2/3 lg:1/3 py-6 px-8 border border-2 border-slate-300 rounded-xl'
        >
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date_of_birth}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                <div className="text-red-500">{formik.errors.date_of_birth}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="text"
                name="contact_number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact_number}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {formik.touched.contact_number && formik.errors.contact_number ? (
                <div className="text-red-500">{formik.errors.contact_number}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Batch</label>
              <select
                name="batch_id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.batch_id}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select a Batch</option>
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="5-6PM">5-6PM</option>
              </select>
              {formik.touched.batch_id && formik.errors.batch_id ? (
                <div className="text-red-500">{formik.errors.batch_id}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Month</label>
              <input
                type="month"
                name="month"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.month}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {formik.touched.month && formik.errors.month ? (
                <div className="text-red-500">{formik.errors.month}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 text-lg bg-cyan-500 text-white p-2 rounded w-full enabled:hover:bg-cyan-600 enabled:cursor-pointer disabled:opacity-70"
                disabled={loading}

              >
                Enroll Now
                {loading ?
                  <svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="#FFFFFF" stroke="#FFFFFF" stroke-width="5" transform-origin="center" d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path></svg>
                  : <></>
                }

              </button>
            </div>
          </form>

        </div>
      }



    </div>
  )
}