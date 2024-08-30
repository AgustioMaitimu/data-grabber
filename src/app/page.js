'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    motherName: '',
    dateOfBirth: '',
    SSN: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    phoneNumber: false,
    email: false,
    motherName: false,
    dateOfBirth: false,
    SSN: false,
  });

  const router = useRouter();

  function validateInput(fieldName, value) {
    let isValid = true;

    switch (fieldName) {
      case 'name':
      case 'motherName':
        if (!/^[A-Za-z\s]+$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: true,
          }));
          isValid = false;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: false,
          }));
        }
        break;

      case 'phoneNumber':
        if (!/^\d+$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            phoneNumber: true,
          }));
          isValid = false;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            phoneNumber: false,
          }));
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: true,
          }));
          isValid = false;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: false,
          }));
        }
        break;

      case 'dateOfBirth':
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!dateRegex.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            dateOfBirth: true,
          }));
          isValid = false;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            dateOfBirth: false,
          }));
        }
        break;

      case 'SSN':
        if (!/^\d{9}$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            SSN: true,
          }));
          isValid = false;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            SSN: false,
          }));
        }
        break;

      default:
        break;
    }

    return isValid;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateInput(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    for (const field in formData) {
      if (!validateInput(field, formData[field])) {
        formIsValid = false;
      }
    }

    if (formIsValid) {
      document.getElementById('hidden-link').click();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white md:p-6">
      <div className="w-full max-w-md rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Welcome to Data-Grabber!</h1>
        <p className="mb-4 text-sm text-gray-400">
          Input your data (or not, we won&apos;t steal your data or anything,
          promise 😉)
        </p>
        <form onSubmit={handleSubmit}>
          {[
            'name',
            'phoneNumber',
            'email',
            'motherName',
            'dateOfBirth',
            'SSN',
          ].map((field) => (
            <div className="mb-4" key={field}>
              <label className="mb-1 block text-sm font-medium">
                {field.replace(/([A-Z])/g, ' $1').toUpperCase()}:
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-gray-800 p-2 text-gray-200 ${errors[field] ? 'border-red-600' : 'border-gray-600'}`}
              />
              {errors[field] && (
                <span className="text-xs text-red-500">
                  {field === 'name' || field === 'motherName'
                    ? 'Invalid name. Only letters are allowed.'
                    : field === 'phoneNumber'
                      ? 'Invalid phone number. Only numbers are allowed.'
                      : field === 'email'
                        ? 'Invalid email format.'
                        : field === 'dateOfBirth'
                          ? 'Invalid date format. Use DD/MM/YYYY.'
                          : 'Invalid SSN. It should be 9 digits.'}
                </span>
              )}
            </div>
          ))}
          <div className="mb-4 mt-7">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 p-2 text-sm text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
          <Link
            href={{ pathname: '/result', query: formData }}
            id="hidden-link"
            className="hidden"
          />
        </form>
      </div>
    </main>
  );
}
