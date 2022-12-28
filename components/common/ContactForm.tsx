import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";



interface ContactFormProps {
  cta: {
    label: string;
    href: string;
  }
  ctaClassName?: string;
}

const ContactForm = ({ cta, ctaClassName }: ContactFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [sendErrorMessage, setSendErrorMessage] = useState('');
  const [sending, setSending] = useState(false);

  const onSubmit = async (data: any) => {
    setSending(true);
    try {
      const response = await axios.post(cta.href, data)
      if (response.status === 200) {
        setSuccessMessage("Message sent! Thanks for getting in touch 😊")
      }
    }
    catch (err) {
      setSendErrorMessage("Hmm.. Something went wrong sending your message. Please try again later.")
    }
    setSending(false);
  }

  return (
    <div className="mx-auto max-w-lg p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", { required: true })} placeholder="*Your Name" className="input input-bordered w-full" />
        <span className={`text-sm text-red-500 ${errors.name ? 'opacity-100' : 'opacity-0'}`}>*Name is required</span>
        <input type="email" {...register("email", { required: true })} placeholder="*Your Email Address" className="input input-bordered w-full" />
        <span className={`text-sm text-red-500 ${errors.email ? 'opacity-100' : 'opacity-0'}`}>*Email is required</span>
        <textarea {...register("message", { required: true })} className="mt-5 h-32 textarea textarea-bordered w-full" placeholder="*Message"></textarea>
        <span className={`text-sm w-full text-red-500 ${errors.message ? 'opacity-100' : 'opacity-0'}`}>*A Message is required</span>
        <br />
        <button className={`${ctaClassName} btn btn-primary my-10 ${sending ? 'loading' : ''}`} type="submit">{sending ? '' : cta.label}</button>
      </form>

      {successMessage && <h4 className="text-green-500 flex items-center gap-2"><FaCheckCircle />{successMessage}</h4>}
      {sendErrorMessage && <h4 className="text-red-500">{sendErrorMessage}</h4>}
    </div>
  )
}

export default ContactForm
