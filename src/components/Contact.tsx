import { FormEvent, useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function submitForm(e: FormEvent<HTMLInputElement | HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSent(false);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, text }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Something went wrong");
        }
        res.json();
      })
      .then(() => {
        setIsSent(true);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      });
    setIsLoading(false);
  }

  return (
    <section className="contact" id="contact">
      <h2>Get in touch</h2>
      <form onSubmit={submitForm}>
        <div className="inputBox">
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>E-Mail</label>
        </div>

        <div className="inputBox">
          <textarea
            name="message"
            required
            onChange={(e) => setText(e.target.value)}
            rows={10}
            defaultValue={text}
          />
          <label>Message</label>
        </div>

        <div className="submitBtn">
          <input
            onSubmit={submitForm}
            type="submit"
            id="submit"
            value="Submit"
          />
        </div>
        {isLoading && <div>Loading</div>}
        {isSent && (
          <div className="success">
            Successfully sent your message, I&apos;ll try to respond as soon as
            possible.
          </div>
        )}
        {isError && (
          <div className="error">
            An error occured while sending your message, please try again later.
          </div>
        )}
      </form>
    </section>
  );
}
