import classNames from "classnames"
import AvatarIcon from "./AvatarIcon"
import AvatarImage from "./AvatarImage"
import React from "react"


export type AvatarProps = {
  size?: 'xs' | 'sm' | 'md' |'lg';
  rounded?: boolean,
  image?: string
  description?: string;
  className:string,
} & React.ReactHTMLElement <HTMLDivElement>

const avatarSizeMap = {
  xs: 'h-5 w-5',
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-9 w-9',
}


const Avatar = ({size='xs',image,description="",className, ...rest} : AvatarProps) => {
  const avatarSizeClass = avatarSizeMap[size]

  const avatarComponent = image ? (
    <AvatarImage src={image}  altDescription={description || ""} />
  ): < AvatarIcon/>

  return (
  <div className={classNames('relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400',
    avatarSizeClass,
    className
  )}
  {...rest}>
    {avatarComponent}
  </div>)
}
export default Avatar
