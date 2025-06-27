import  {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"

import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'



const Contact = () => {

  const formRef = useRef();
  const [form,setForm] = useState({
    name:'',
    email:"",
    message:'',
  })
  const [loading,setLoading] = useState(false)
  const  handleChange = (e) =>{
    const{name,value} = e.target;

    setForm({...form, [name]:value})
  }
  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs.send(
    import.meta.env.EMAILJS_SERVICE_ID,
    import.meta.env.EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      to_name: import.meta.env.EMAILJS_TO_NAME,
      from_email: form.email,
      to_email: import.meta.env.EMAILJS_TO_EMAIL,
      message: form.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  ).then(() => {
    setLoading(false);
    alert('Thank you, we will get back to you as soon as possible');
    setForm({
      name: '',
      email: '',
      message: '',
    });
  }, (error) => {
    setLoading(false);
    console.error(error);
    alert('Something went wrong');
  });
};
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
  <motion.div variants={slideIn('left',"tween",0.2,1)} className='flex-[0.75] bg-gray-950 p-8 rounded-2xl'>
    <h3 className='text-stale-200 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact</h3>
    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4 '>Your Name</span>
                  <input type='text'
                    required
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className='bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none border-none font-medium'
                  ></input>
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4 '>Your Email</span>
                  <input type='email'
                  required
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className='bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none border-none font-medium'
                  ></input>
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4 '>Your Message</span>
                  <textarea
                    rows="7"
                    required
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className='bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none border-none font-medium'
                  ></textarea>
                </label>
                <button type='submit' className='bg-slate-400 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  </motion.div>
  
  <motion.div variants={slideIn('right',"tween",0.2,1)} className='flex-[0.75] bg-tansparent p-8 rounded-2xl'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30367437.820548162!2d70.668994!3d21.704176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f9e6992e21e7%3A0xaad16b298ed65798!2sUSTS%20OMAN%20(USTS)!5e0!3m2!1sen!2sin!4v1688897499014!5m2!1sen!2sin" width="450" height="660"></iframe>
  </motion.div>
</div>
    
  )
}

export default SectionWrapper(Contact,"contact")