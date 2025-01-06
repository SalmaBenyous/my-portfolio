import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json';  // Updated import path
import conactAnimation from '../../animation/contact.json';
import './contact.css';

function Contact() {
  const [state, handleSubmit] = useForm("xeooevyj");
  const [data, setData] = useState({ email: '', message: '' });

  // دالة لتفريغ الحقول عند الضغط على Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();  // لمنع إعادة تحميل الصفحة
    setData({ email: '', message: '' }); // تفريغ الحقول
    handleSubmit(e); // إرسال البيانات
  };

  return (
    <section className="contact">
      <h1 className="title">
        <span className="icon-envelope"></span> Kontaktieren Sie mich
      </h1>
      <p className="sub-title">
        Kontaktieren Sie mich für weitere Informationen und erhalten Sie eine Benachrichtigung, wenn ich etwas Neues veröffentliche.
      </p>
      <div style={{ justifyContent: 'space-between' }} className="flex">
        <form onSubmit={handleFormSubmit}>
          <div className="flex">
            <label htmlFor="email">E-Mail-Adresse:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="E-Mail-Adresse"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Ihre Nachricht:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Nachricht"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button disabled={state.submitting} className="submit">
            Submit
          </button>

          {/* عرض رسالة النجاح والرسوم المتحركة بعد الإرسال الناجح */}
          {state.succeeded && (
            <p className="flex" id="messageSuccesse">
              <Lottie loop={false} style={{ height: '95px', marginRight: '-27px' }} animationData={doneAnimation} />
              Ihre Nachricht wurde erfolgreich gesendet
            </p>
          )}
        </form>

        {/* قسم اختياري للرسوم المتحركة أو المحتوى */}
        <div className="animationConatct">
          <Lottie style={{ height: '250px' }} animationData={conactAnimation} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
