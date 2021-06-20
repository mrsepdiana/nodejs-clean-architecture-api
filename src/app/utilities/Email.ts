import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import config from '../../config'

const transporter = (options: SMTPTransport) => {
  const { host, port, user, password, secure } = config.emailConfig

  return nodemailer.createTransport({
    ...options,
    host,
    port,
    secure,
    auth: {
      user,
      pass: password
    },
  })
}

export default transporter;