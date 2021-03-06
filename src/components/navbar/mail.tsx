import React from 'react'
import EmailIcon from '@mui/icons-material/Email'

interface MailButtonProps {
  className?: string
}

const MailButton = (props: MailButtonProps) => {
  const {className} = props
  return <EmailIcon color={'info'} className={`${className} icon--large clickable`} />
}

export default MailButton
