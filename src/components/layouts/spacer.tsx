import React from 'react'

interface Props {
  top: string
}

export const Spacer = ({top}: Props) => (
  <div style={{display: 'block', height: '100%', width: '100%', marginTop: `${top}`}} />
)
