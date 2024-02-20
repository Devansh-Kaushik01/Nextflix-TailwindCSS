import React from 'react'
import Lists from './Lists'

function UnorderList() {
    return (
        <div>
            <ul className='flex flex-col gap-2.5 lg:w-[1170px] w-full cursor-pointer mt-10 '>
              <Lists
              questionName={'What is Netflix ?'}
              />
               <Lists
              questionName={'How much does Netflix cost?'}
              />
               <Lists
              questionName={'Where can i watch ?'}
              />
               <Lists
              questionName={'How do I cancel ?'}
              />
               <Lists
              questionName={'What can I watch on Netflix ?'}
              />
               <Lists
              questionName={'Is Netflix good for kids ?'}
              />
            </ul>
        </div>
    )
}

export default UnorderList