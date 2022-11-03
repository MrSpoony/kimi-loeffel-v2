import { FormEvent, useState } from "react"

export default function Contact() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const submitForm = (e: FormEvent<HTMLInputElement | HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ email, text })
    })
  }

  return (<section className="contact" id="contact">
    <h1>Get in touch</h1>
    <form onSubmit={submitForm}>
      <div className="inputBox">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>E-Mail</label>
      </div>

      <div className="inputBox">
        <textarea
          name="message"
          required
          onChange={e => setText(e.target.value)}
          rows={10}
        >{text}</textarea>
        <label>Message</label>
      </div>

      <div className="submitBtn">
        <input onSubmit={submitForm} type="submit" id="submit" value="Submit" />
      </div>
    </form>
  </section>)
}
