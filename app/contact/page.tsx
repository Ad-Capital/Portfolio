"use client";

import { AnimatePresence } from 'framer-motion';
import styles from "./page.module.scss"
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import useAlert from '../../hooks/useAlert';
import Alert from '../../components/Alert';
import Rounded from "../../common/RoundedButton"
import  Contactloader  from "./Contactloader";



type FormState = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: 'Ona Adrian',
          from_email: form.email,
          to_email: 'adxkap@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        setLoading(false);
        showAlert({
          text: 'Thank you for reaching out.',
          type: 'success',
        });

        setTimeout(() => {
          hideAlert();
          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, 3000);
      }, (error) => {
        setLoading(false);
        console.error(error);

        showAlert({
          text: "Message not delivered, Please try again.",
          type: 'danger',
        });
      });

  };


  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Contactloader key="preloader" />}
      </AnimatePresence>
      <section className={styles.container}>
        {alert.show && <Alert {...alert} />}

        <div className={styles.el}>

          <div className={styles.contact}>
            <h3>Get In Touch</h3>
            <p>
              Whether you're starting a new website, refining your current one,
              bringing a creative idea to life, or looking for standout designs,
              I’m here to guide you through the process.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <label>
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </label>

              <label>
                <span>Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="johndoe@gmail.com"
                />
              </label>

              <label>
                <span>Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>
              <div className={styles.buttoncontainer}>
                <Rounded>
                  <button className="field-btn" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send'}

                    <img src="arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                  </button>
                </Rounded>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>

  );
};

export default Contact;
