import React from 'react'

import { UserProps } from '../../types'
export default function User({
  firstName,
  lastName,
  email
}: UserProps) {
  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  )
}
