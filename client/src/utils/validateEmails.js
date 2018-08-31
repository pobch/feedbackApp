const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default strEmails => {
  const invalidEmailArr = strEmails
    .split(',')
    .map(email => email.trim())
    .filter(email => !re.test(email))

  if (invalidEmailArr.length) {
    return `These e-mails are invalid : ${invalidEmailArr}`
  }

  return
}
