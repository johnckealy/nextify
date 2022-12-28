import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState(null);
  const [sendErrorMessage, setSendErrorMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://eo1cxbr3a6gnwis.m.pipedream.kl', data)
      if (response.status === 200) {
        setSuccessMessage("Done! Thanks for getting in touch 😊")
      }
    }
    catch (err) {
      setSendErrorMessage("Hmm.. Something went wrong sending your message. Not to worry, you can still send me an email at johnckealy@gmail.com!")
    }
  }

  if (!successMessage && !sendErrorMessage) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">

        <div className="relative w-full  h-10">
          <input type="email"  {...register("email", { required: true })} className="peer w-full h-full bg-transparent
        text-orange-gray-700 outline outline-0 placeholder-shown:ring-1 placeholder-shown:ring-gray-400 focus:ring-0 focus:outline-0 disabled:bg-orange-gray-50 disabled:border-0
        transition placeholder-shown:border placeholder-shown:border-orange-gray-200
         placeholder-shown:border-t-orange-gray-200 border focus:border-2 border-t-transparent
         focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-orange-gray-200 focus:border-orange-500" placeholder=" " />
          <label className="flex w-full h-full select-none pointer-events-none absolute
         left-0 font-normal peer-placeholder-shown:text-orange-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-orange-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-orange-gray-400 peer-focus:text-orange-500 before:border-orange-gray-200 peer-focus:before:border-orange-500 after:border-orange-gray-200 peer-focus:after:border-orange-500">
            Your Email
          </label>
        </div>
        <span className={`text-sm text-red-400 ${errors.email ? 'opacity-100' : 'opacity-0'}`}>This field is required</span>

        <div className="relative w-full  h-10">
          <input  {...register("name", { required: true })} className="peer w-full h-full bg-transparent
        text-orange-gray-700 outline outline-0 placeholder-shown:ring-1 placeholder-shown:ring-gray-400 focus:ring-0 focus:outline-0 disabled:bg-orange-gray-50 disabled:border-0
        transition placeholder-shown:border placeholder-shown:border-orange-gray-200
         placeholder-shown:border-t-orange-gray-200 border focus:border-2 border-t-transparent
         focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-orange-gray-200 focus:border-orange-500" placeholder=" " />
          <label className="flex w-full h-full select-none pointer-events-none absolute
         left-0 font-normal peer-placeholder-shown:text-orange-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-orange-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-orange-gray-400 peer-focus:text-orange-500 before:border-orange-gray-200 peer-focus:before:border-orange-500 after:border-orange-gray-200 peer-focus:after:border-orange-500">
            Your Name
          </label>
        </div>
        <span className={`text-sm text-red-400 ${errors.email ? 'opacity-100' : 'opacity-0'}`}>This field is required</span>


        <div className="relative w-full  h-32">
          <textarea  {...register("message", { required: true })} className="peer w-full h-full bg-transparent
        text-orange-gray-700 outline outline-0 placeholder-shown:ring-1 placeholder-shown:ring-gray-400 focus:ring-0 focus:outline-0 disabled:bg-orange-gray-50 disabled:border-0
        transition placeholder-shown:border placeholder-shown:border-orange-gray-200
         placeholder-shown:border-t-orange-gray-200 border focus:border-2 border-t-transparent
         focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-orange-gray-200 focus:border-orange-500" placeholder=" " />
          <label className="flex w-full h-full select-none pointer-events-none absolute
         left-0 font-normal peer-placeholder-shown:text-orange-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-orange-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-orange-gray-400 peer-focus:text-orange-500 before:border-orange-gray-200 peer-focus:before:border-orange-500 after:border-orange-gray-200 peer-focus:after:border-orange-500">
            Message
          </label>
        </div>
        <span className={`text-sm text-red-400 ${errors.message ? 'opacity-100' : 'opacity-0'}`}>This field is required</span>

        <input className="w-full ring-1 cursor-pointer ring-gray-400 hover:bg-gray-400 hover:text-white transition duration-300 p-2 px-10 font-chelsea rounded-[7px] " type="submit" />
      </form>
    );
  }
  else {
    return (
      <>
        {successMessage &&
          <p className="text-lg text-green-400">
            <span className="flex gap-2 items-center"><FaCheckCircle /> {successMessage}</span>
          </p>}

        {sendErrorMessage && <p className="text-sm text-red-400">{sendErrorMessage}</p>}
      </>
    )

  }
}

export default ContactForm;
