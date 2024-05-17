import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar'

export default function ProfilePic() {
  return (
    <Avatar>
        <AvatarImage src='https://github.com/AngeloCarnevale.png'/>
        <AvatarFallback>ÂC</AvatarFallback>
    </Avatar>
  )
}