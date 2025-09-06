import ContactUsComp from '@/Components/contactUsComp'
import React from 'react'

const ContactUsPage = () => {
  return (
    <div>
          <section>
        <div className="w-full flex">
          <div className="w-[5%] md:w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[89.95%] md:w-[79.95%] ">
          <ContactUsComp/>
          </div>
          <div className="w-[5.05%] md:w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>
      
    </div>
  )
}

export default ContactUsPage
