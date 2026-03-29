'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Figma
} from 'lucide-react'

import { PERSONAL_INFO } from '@/lib/data'

export default function Contact() {

  const [formState, setFormState] =
    useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  /* Handle Input */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  /* Submit */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    setFormState('sending')

    try {

      const res = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )

      if (res.ok) {

        setFormState('success')

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })

        setTimeout(() => {

          setFormState('idle')

        }, 3000)

      }

      else {

        setFormState('error')

      }

    }

    catch {

      setFormState('error')

    }

  }

  return (

    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >

      {/* 🌌 STAR GRID BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e9_0%,transparent_60%)] opacity-[0.05]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* 🪐 ORBIT ELEMENTS */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[500px] h-[500px] border border-accent1/10 rounded-full top-[10%] left-[5%]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[400px] h-[400px] border border-accent2/10 rounded-full bottom-[10%] right-[5%]"
      />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto items-start">

          {/* LEFT PANEL */}

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold mb-6 font-syne"
            >

              Transmit{" "}

              <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">

                Message

              </span>

            </motion.h2>

            <p className="text-muted text-lg mb-12 font-mono leading-relaxed">

              Establish communication with mission control.
              Send your signal and I'll respond as soon as possible.

            </p>

            {/* CONTACT INFO CARDS */}

            <div className="space-y-6">

              <ContactCard
                icon={<Mail />}
                title="Secure Channel"
                value={PERSONAL_INFO.email}
              />

              <ContactCard
                icon={<Phone />}
                title="Direct Line"
                value={PERSONAL_INFO.phone}
              />

              <ContactCard
                icon={<MapPin />}
                title="Base Location"
                value={PERSONAL_INFO.university}
              />

            </div>

            {/* SOCIAL */}

            <div className="flex gap-4 mt-10">

              <SocialIcon
                href={PERSONAL_INFO.github}
                icon={<Github />}
              />

              <SocialIcon
                href={PERSONAL_INFO.linkedin}
                icon={<Linkedin />}
              />

              <SocialIcon
                href={PERSONAL_INFO.figma}
                icon={<Figma />}
              />

            </div>

          </div>

          {/* RIGHT FORM */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* GLASS PANEL */}

            <div className="bg-surface/30 backdrop-blur-xl border border-accent1/10 rounded-2xl p-8 shadow-2xl">

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >

                <div className="grid sm:grid-cols-2 gap-6">

                  <InputField
                    label="Commander Name"
                    name="name"
                    id="contact-name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Signal Address (Mail)"
                    name="email"
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

                <InputField
                  label="Transmission Subject"
                  name="subject"
                  id="contact-subject"
                  autoComplete="off"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <div className="flex flex-col gap-2">

                  <label
                    htmlFor="contact-message"
                    className="text-xs uppercase text-muted font-mono"
                  >

                    Message Payload

                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-bg border border-accent1/10 rounded-lg px-4 py-3 focus:border-accent1/50 transition-colors"
                  />

                </div>

                {/* SEND BUTTON */}

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-accent1 to-accent2 text-white flex justify-center items-center gap-2 hover:scale-[1.02] transition-transform"
                >

                  {formState === 'idle' && (
                    <>
                      <Send className="w-4 h-4" />
                      Send Transmission
                    </>
                  )}

                  {formState === 'sending' && (
                    <span className="flex items-center gap-2">

                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />

                      Transmitting...

                    </span>
                  )}

                  {formState === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      Transmission Sent
                    </>
                  )}

                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}

/* CONTACT CARD */

function ContactCard({
  icon,
  title,
  value
}: any) {

  return (

    <div className="flex items-center gap-4 p-4 border border-accent1/10 rounded-xl bg-surface/20 backdrop-blur">

      <div className="w-12 h-12 rounded-full border border-accent1/20 flex items-center justify-center">

        {icon}

      </div>

      <div>

        <p className="text-xs uppercase text-muted font-mono">

          {title}

        </p>

        <p className="text-text font-medium">

          {value}

        </p>

      </div>

    </div>

  )

}

/* SOCIAL ICON */

function SocialIcon({
  href,
  icon
}: any) {

  return (

    <a
      href={href}
      target="_blank"
      className="p-3 rounded-full border border-accent1/20 hover:border-accent1/50 transition-all"
    >

      {icon}

    </a>

  )

}

/* INPUT FIELD */

function InputField({
  label,
  name,
  id,
  type = "text",
  autoComplete,
  value,
  onChange
}: any) {

  return (

    <div className="flex flex-col gap-2">

      <label
        htmlFor={id || name}
        className="text-xs uppercase text-muted font-mono"
      >

        {label}

      </label>

      <input
        id={id || name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        required
        className="bg-bg border border-accent1/10 rounded-lg px-4 py-3 focus:border-accent1/50 transition-colors"
      />

    </div>

  )

}