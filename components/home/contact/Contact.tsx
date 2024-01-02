'use client'
import { useForm } from 'react-hook-form';
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

type FormInput = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

  /**
  * The function sends a POST request to a server with form data and displays a success notification.
  * @param {FormInput} formData - The formData parameter is an object that contains the input values
  * from the form.
  */
  async function onSubmit(formData: FormInput) {
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone: formData.phone,
      }),
    })
    reset();
  }

  return (
    <div className="section-wrapper mb-20">

<section className="section-wrapper" id="contact">
        <div className={styles.contactWrapper}>
          <Reveal width="100%">
            <h4 className={styles.contactTitle}>
              Contact<span>.</span>
            </h4>
          </Reveal>
          <Reveal width="100%">
            <p className={styles.contactCopy}>
              <span style={{ paddingRight: 5 }}>
                If you want to connect! You can also find me
                on
              </span>
              <br />
              <Link
                href="https://medium.com/@neupane.krishna33"
                target="_blank"
                rel="nofollow"
              >
                Medium
              </Link>{" "}
              | {" "}
              <Link
                style={{ paddingRight: 5 }}
                href="https://www.linkedin.com/in/krishna-neupane-50082091/"
                target="_blank"
                rel="nofollow"
              >
                Linkedin
              </Link>
              | {" "}
              <Link
                href="https://www.instagram.com/makeajourneywithkrishna/"
                target="_blank"
                rel="nofollow"
              >
                Instagram
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <form
        onSubmit={handleSubmit(onSubmit)} // updated code
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <label htmlFor="your-name" className="block text-md font-semibold leading-6  dark:text-slate-600 mb-5">
              Your Name
            </label>
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-slate-900  dark:text-slate-300 dark:ring-slate-700 "
              type='text'
              placeholder='Name'
              required
              {...register('name')}
            />
          </div>
          <div className="mt-2.5">
            <label htmlFor="email" className="block text-md font-semibold leading-6  dark:text-slate-600 mb-5">
              Email Address
            </label>
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-slate-900  dark:text-slate-300 dark:ring-slate-700 "
              type='email'
              placeholder='Email'
              required
              {...register('email')}
            />
          </div>

          <div className=" space-y-2 col-span-2">
            <label htmlFor="phone-number" className="block text-md font-semibold leading-6  dark:text-slate-600 mb-5">
              Phone Number 
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
              </div>
              <input
                type="tel"
                autoComplete="tel"
                {...register('phone')}
                className="block w-full rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-slate-900  dark:text-slate-300 dark:ring-slate-700 "
              />
            </div>
          </div>

         


          <div className=" space-y-2 col-span-2">
            <textarea
              className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 dark:bg-slate-900  dark:text-slate-300 dark:ring-slate-700 "
              placeholder='Your Message '
              rows={6}
              required
              {...register('message')}
            />
          </div>



          <div className=" space-y-2 col-span-2">
            <button
              disabled={isSubmitting}
              type="submit"
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Submit
            </button>

            {/* <button disabled type="button" className=" w-full py-2.5 px-5 me-2 text-md font-medium  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 inline-flex items-center">
                   <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                   </svg>
                   Sending Email to Sanjeeb...
               </button> */}
          </div>


        </div>
      </form>
    </div>

  );
}