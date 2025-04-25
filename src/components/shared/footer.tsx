import React from 'react'
import { StyledLink } from './styled-link'
import { Github } from 'lucide-react'

interface Props {
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={'bg-black h-16 mt-10 flex items-center px-6'}>
        <p className='text-white'>Developed by </p>
        <StyledLink className='text-white flex mx-2' href="https://github.com/zevess">
            <Github/>
            zevess
        </StyledLink>
    </footer>
  )
}
