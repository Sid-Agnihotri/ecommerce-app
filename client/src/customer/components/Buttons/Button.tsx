import React from 'react'
import { Button as MUIButton, ButtonProps } from '@mui/material'

interface CustomButtonProps extends ButtonProps {
  label: string
}

const Button: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  startIcon,
  endIcon,
  variant,
  color,
  sx,
  ...props
}) => {
  return (
    <MUIButton
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
      color={color}
      sx={sx}
      {...props}
    >
      {label}
    </MUIButton>
  )
}
export default Button
