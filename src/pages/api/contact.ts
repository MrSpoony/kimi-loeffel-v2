import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

async function sendEmail(from: string, to: string, message: string) {
  return new Promise((res, rej) => {
    const smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAILER_MAIL,
        pass: process.env.EMAILER_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAILER_MAIL,
      to: to,
      subject: from + ' | new message !',
      text: message || "The text could not be parsed",
    }
    smtpTransport.sendMail(mailOptions, function(error, info) {
      if (error) {
        rej(error)
      } else {
        res(info)
      }
    });
  })
}

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  const { email, text }: { email: string | null, text: string | null } = req.body;
  if (!email || !text) {
    res.status(422).json({ message: "Unreadable body" })
    return
  }
  sendEmail(email, process.env.EMAILER_TO || "", text)
    .then(() => {
      res.status(200).json({ message: "Message sucessfully sent" })
    })
    .catch(() => {
      res.status(500).json({ message: "Message could not be sent" })
    });
}
