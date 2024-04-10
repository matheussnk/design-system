import classNames from "classnames"
import React from "react"

export type BoxProps = {
  children: React.ReactNode
  rounded?: boolean
  border?: boolean
  filledBackground?: boolean
  type: "primary" | "secoundary" | "dark" | "alert" | "success" | "error"
  className: string
} & React.HTMLAttributes<HTMLDivElement>

const boxClassMap = {
  primary: "bg-primary px-3 text-white",
  secoundary: "bg-secondary text-black",
  dark: "bg-black text-white",
  alert: "bg-amber-400 px-3 text-white",
  success: "bg-lime-600 px-3 text-white",
  error: "bg-red-600 px-3 text-white",
}

const Box = ({
  rounded = false,
  border = false,
  filledBackground = false,
  type = "primary",
  children,
  className,
  ...rest
}: BoxProps) => {
  const classes = classNames({
    "rounded-md": rounded,
    "border border-gray-100": border,
    "bg-dark": filledBackground,
    [boxClassMap[type]]: type,
  })
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
export default Box
