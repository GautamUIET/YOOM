import CallList from '@/components/CallList';
import { Call } from '@stream-io/video-react-sdk';
import React from 'react'

const recording = () => {
  return (
 <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className = 'text-3xl font-bold'>
        
      </h1>
     <CallList type = 'recordings'/>
    </section>
  )
}

export default recording;