import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
const TermsAndConditions = () => {
  return (
    <>
        <NavBar/>
        <div className="pt-24 pb-8">
            <div className="relative">
                <div className="w-full">
                    <div className="w-full mx-auto max-w-[1400px] ">
                        <div className="p-4">
                            <section className="my-8 border border-gray-300 rounded">
                                <div className="flex flex-col space-y-3 w-full lg:pt-8 gap-2">
                                    <div className='flex items-center justify-center '>
                                        {/* <div className="h-4 w-1 bg-green-500"></div> */}
                                        <h1 className="ml-2 font-bold text-green-500 lg:uppercase lg:text-2xl">
                                            Terms & Conditions
                                        </h1>
                                    </div>
                                    {/* <h1 className='text-center lg:text-2xl'>LMClub Terms And Conditions</h1> */}
                                </div>

                                <div className="relative flex my-2 items-center mx-4">
                                    <div className="flex-grow border-t border-gray-400"></div>
                                    <span className="flex-shrink mx-4 text-gray-400 text-sm">
                                        Effective from January 2023
                                    </span>
                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                     1. Legally Binding Terms
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                         By accessing the APP / Website, you agree to be bound by and comply with these Terms of Use (and all documents incorporated by reference in these Terms of Use), which is a legally binding agreement between you and LM CLUB. Further, by accessing and using the APP / Website, you agree to comply with all laws and regulations that may apply regarding your access and use of the APP / Website, the Content, and the Services.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        You acknowledge and understand that certain Content and/or Services may be subject to additional terms and conditions which will be available for viewing prior to access to or receipt of such Content or Services.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        Please take the time to carefully review these Terms of Use before proceeding. If you do not understand or agree to be bound by any of these terms, do not use the APP / Website. By accessing and using the APP / Website, you accept and consent to (i) these Terms of Use, (ii) the entering of contracts through electronic means or media, and (iii) the exchange of information and/or documents between you and The Laoe Maom Group / LM CLUB electronically. By using the APP / Website, you represent and warrant that you are of legal age in the jurisdiction in which you reside and otherwise have capacity to form a binding contract, and that you are not a person barred by any laws from accessing or using the APP / Website.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    These Terms of Use contain provisions that may limit your rights and remedies and also include provisions that exclude or limit LM CLUB’s liability. Please review these Terms of Use in their entirety. You are encouraged to save a copy of these Terms of Use for your records and for future reference by using your web browser’s print or save features.
                                    </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                    2. Amendments
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        The Laoe Maom Group / LM CLUB may amend these Terms of Use from time to time in its sole discretion and may do so without notice to you. Any such amendments will take effect upon being posted on the APP / Website. Your access to or continued use of the APP / Website following any such change constitutes your unconditional agreement to comply with and be bound by these Terms of Use as amended. For this reason, you should review the effective date of these Terms of Use (which appears at the very top of this document) each time you access the APP / Website and, if these Terms of Use have been revised since your last visit, you should review the revised Terms of Use which will apply to your visit and use of the APP / Website, your access to and use of any Content and/or Services.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                   3. U.S. APP / Website
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        Access to the APP / Website is for the benefit of persons residing in the United States. If you are a resident of a country other than the United States, you should determine which The Laoe Maom Group / LM CLUB affiliate services your area and access such affiliate’s APP / Website. Do not access the APP / Website, download any Content, or use any Services if the foregoing is prohibited by applicable laws in the jurisdiction in which you reside.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                    4. Account
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     Access to certain features of the APP / Website requires the creation of an account (“Account”).
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        You hereby represent and warrant that all information you provide for your Account will be accurate, current, and complete. Further, you agree to update such information to the extent it becomes outdated or is otherwise no longer accurate or complete.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    At all times, you must only use your Account in a legal manner in compliance with the letter and spirit of these Terms of Use. You are solely responsible for the activity that occurs regarding your Account. It is your responsibility to choose a secure password for your Account. Do not disclose such password or provide access to it; you are solely responsible and liable for loss or damage resulting from your failure to comply with the foregoing obligation. You may change your password at any time by updating your Account. You are prohibited from using any other user’s account. If you recognize any unauthorized use of your password or your Account or any other breach of security, you must immediately notify LM CLUB in at <a  className='hover:text-green-600 underline font-bold text-green-600' href='/contact-us'> Visit Contact us page.</a>
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    All user IDs and passwords remain the sole property of The Laoe Maom Group/ LM CLUB, and your Account may be cancelled or suspended at any time by Laoe Maom Group/ LM CLUB without prior notice or any liability to you or any other person. Without any limitation to the generality of the foregoing, if The Laoe Maom Group/ LM CLUB, in its sole discretion, considers a password to be insecure or otherwise compromised, The Laoe Maom Group/ LM CLUB may cancel the password and/or your Account, as applicable.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        You agree to promptly respond to all e-mail and other correspondence from The Laoe Maom Group/ LM CLUB which requests or requires a response from you, including without limitation communications concerning complaints or concerns regarding your use of the APP / Website and/or the use of your Account.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        You hereby agree that by creating an Account or otherwise providing your contact information to The Laoe Maom Group/ LM CLUB, you consent that The Laoe Maom Group/ LM CLUB, its service providers, agents, and/or other parties initiating communications on its behalf, may contact you by telephonic, electronic, or other forms of communication, including but not limited to e-mail, voice call or text message (including non-marketing calls and text messages made using an automatic telephone dialing system or a prerecorded or artificial voice), fax or other means regardless of the format of the original inquiry.
                                    </h1>
                                    </div>
                                </div>
                                
                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                        5. No Agency, Franchise, Employment, Distribution or Similar Relationship
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        No agency, partnership, joint venture, employment, franchise, distribution, or similar relationship is intended or created by your agreement to these Terms of Use, by your access to and/or use of the APP / Website, Services, and/or Content.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                        6. Ownership and Copyright
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     All Content including, without limitation, images, pictures, illustrations, drawings, product descriptions, product brochures, instruction manuals, logos, videos, and audio recordings, is protected by copyright owned exclusively by The Laoe Maom Group/ LM CLUB or its licensors, as the case may be. The Laoe Maom Group/ LM CLUB and its licensors reserve all rights, titles, and interests in and to the Content which are not expressly granted to you under these Terms of Use. The Content may only be used for your personal and non-commercial use and may not be copied, reproduced, republished, uploaded, posted, transmitted, distributed, or otherwise exploited in any way for any commercial purpose. Any modification of Content or use of Content for any other purpose is a violation of the copyrights and other proprietary rights. You are prohibited from using any Content on any other APP / Website or networked computer environment. Any rights to the Content not expressly granted herein are reserved.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     The Laoe Maom Group/ LM CLUB’s names, logos, and all related product names, tradenames, service marks, trademarks, design marks, and slogans are the property of and owned by The Laoe Maom Group/ LM CLUB and are used in the United States under exclusive license by The Laoe Maom Group/ LM CLUB.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                        7. License
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        Under these Terms of Use, The Laoe Maom Group/ LM CLUB grants you permission to temporarily download one copy of the Content solely for your personal, non-commercial use in the United States. The Laoe Maom Group/ LM CLUB may amend or terminate this license at any time in its sole discretion. You acknowledge and understand that you are only being provided a limited license to the Content and that this license is subject to the following restrictions:
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        <ul className="list-disc pl-7 p-2">
                                          <li>You shall not modify the Content.</li>
                                          <li>You shall not use the Content for any commercial purpose.</li>
                                          <li>
                                            You shall not create derivative works of, reverse engineer, decompile, 
                                            disassemble, adapt, translate, transmit, arrange, modify, copy, bundle, 
                                            sell, sublicense, export, merge, transfer, adapt, loan, rent, lease, assign, 
                                            share, scrape, host, publish, broadcast, publicly display, make available 
                                            to any person, or otherwise use or exploit, whether directly or indirectly, 
                                            the Content in whole or in part, in any form or by any means whatsoever, 
                                            whether physical, electronic or otherwise.
                                          </li>
                                          <li>
                                            You shall not permit, allow, or do anything that would infringe, 
                                            compromise or otherwise prejudice the proprietary rights of 
                                            The Laoe Maom Group/ LM CLUB or its licensors.
                                          </li>
                                          <li>You shall not allow any third party to access the Content.</li>
                                          <li>You shall not transfer the Content to another person or “mirror” the Content on any other server.</li>
                                          <li>You shall not engage in the violation of any laws, third-party rights, or published The Laoe Maom Group/ LM CLUB policies.</li>
                                        </ul>
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        This license shall automatically terminate if you violate any of these restrictions.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     Upon completion of your personal viewing and consultation of the Content, or on the termination of this license, you must destroy any downloaded Content in your possession, whether in electronic or printed format.
                                     </h1>
                                    </div>
                                </div>
                                
                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                        8. Personal Information
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     Personal information collected through the APP / Website is subject to The Laoe Maom Group/ LM CLUB’s online privacy policy (the “Online Privacy Policy”), accessible here. By accessing the APP / Website, you consent to the collection, use, retention, disclosure and destruction of personal information as described in the Online Privacy Policy, as such policy may be amended from time to time in <a  className='hover:text-green-600 underline font-bold text-green-600' href='/privacy-policy'> privacy</a> sole discretion.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                        9. User Generated or Supplied Comments and Content
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        When you submit ideas, concepts, inventions, know-how, techniques, comments, suggestions, and/or feedback (collectively, “User Comments”) to the APP / Website, the User Comments will become the exclusive property of The Laoe Maom Group / LM CLUB and https://www.lmclub.club/policy/ shall be entitled to collect, use, publish, retain, disclose, destroy, commercialize, and exploit the User Comments without restriction or obligation to pay any royalty or provide other consideration.
                                     </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        You hereby grant to The Laoe Maom Group / LM CLUB a perpetual, unrestricted, unlimited, royalty-free, worldwide, non-exclusive, irrevocable, transferable license to run, display, copy, reproduce, publish, bundle, distribute, market, create derivative works of, adapt, translate, transmit, arrange, modify, sublicense, export, merge, transfer, loan, rent, lease, assign, share, host, make available to any person, commercialize, exploit, or otherwise use any information or other content you provide on or through the APP / Website or which is sent to The Laoe Maom Group / LM CLUB or any of its authorized dealers or distributors by email or other correspondence (collectively, “User Content”), for any purpose whatsoever. The Laoe Maom Group / LM CLUB shall not be subject to any obligations of confidentiality regarding any such information unless specifically agreed to by The Laoe Maom Group / LM CLUB in writing or required by law and The Laoe Maom Group / LM CLUB may freely grant sublicenses to User Content or any part thereof. You also grant to The Laoe Maom Group / LM CLUB the right to use your name and likeness in connection with any User Content that you provide.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        You represent and warrant that you: (i) exclusively own any User Comments immediately prior to their submission through the APP / Website; and (ii) have the unrestricted right to grant the license set out above regarding the User Content.
                                    </h1> 
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                    10. Access Restrictions
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        The APP / Website contains sections and areas that are restricted to The Laoe Maom Group / LM CLUB personnel, consumers, affiliates, service providers, distributors, and/or authorized The Laoe Maom Group / LM CLUB dealers. Access to certain sections and areas of the APP / Website may also be restricted to end users who have created an Account. Therefore, not all pages and resources of the APP / Website will be accessible to you. Notwithstanding the foregoing, access to the APP / Website and all pages, Services and Content on the APP / Website or accessible through the APP / Website, and any revocation of any such previously provided access, is subject to The Laoe Maom Group / LM CLUB’s exclusive discretion. Unauthorized access may result in civil or criminal penalties as well as the exercise by The Laoe Maom Group / LM CLUB of any remedies or recourses available to it under applicable laws.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                    11. Linked APP / Websites
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     The APP / Website contains hyperlinks to third party APP / Websites which are subject to their own respective terms and conditions of use and privacy policies. These hyperlinks are provided for convenience only. No warranties or representations are made as to third party APP / Websites, and any access to such third party APP / Websites is at your sole risk. The Laoe Maom Group / LM CLUB does not recommend or endorse access or use of any third party APP / Website or any content, product, service, or other subject matter associated with any third party APP / Website. The Laoe Maom Group / LM CLUB assumes no responsibility for the content, services and/or products available through any such third party APP / Website.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                     12. Inappropriate Conduct
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     You agree not to undertake any conduct that is illegal, abusive, or otherwise inappropriate including, without limitation, any of the following:
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        <ul className="list-disc pl-5">
                                          <li>Posting material that is libellous, defamatory, obscene, pornographic, abusive, or threatening.</li>
                                          <li>Posting personal information relating to any individual other than yourself.</li>
                                          <li>Posting material in contravention of any contractual obligation or fiduciary duty.</li>
                                          <li>Posting material that infringes any proprietary right of any third party including, without limitation, any intellectual property right.</li>
                                          <li>Creating links to the APP / Website from commercial APP / Websites.</li>
                                          <li>Using any The Laoe Maom Group / LM CLUB trademark, service mark, or logo in any permitted links to the APP / Website or Content.</li>
                                          <li>Framing of the APP / Website or of any Content in any form and by any method.</li>
                                          <li>Attempting to access areas of the APP / Website, or features and services of the APP / Website, that you are not authorized to access.</li>
                                          <li>Engaging in activities that violate federal, state, municipal, or international law, or advocating illegal activity.</li>
                                          <li>Using the APP / Website to facilitate unsolicited communications or solicitation schemes not expressly permitted by The Laoe Maom Group / LM CLUB.</li>
                                          <li>Compromising the security of the APP / Website or the facilities and/or resources used to operate the APP / Website.</li>
                                          <li>Attempting to gain unauthorized access to the APP / Website or any private network that may be accessible through the APP / Website, or to any APP / Website account other than your own Account.</li>
                                          <li>Taking any actions that may impose, as determined by The Laoe Maom Group / LM CLUB, an unreasonable or disproportionately large load on The Laoe Maom Group / LM CLUB’s facilities, systems, network, or telecommunications infrastructure.</li>
                                          <li>Attempting to interfere with the proper functioning of the APP / Website or any activities conducted on or throughout the APP / Website.</li>
                                          <li>Taking any measures or bypassing any automated exclusions or other measures The Laoe Maom Group / LM CLUB has implemented to restrict access to the APP / Website or certain APP / Website portions, features or services.</li>
                                          <li>Using or launching any automated system, including without limitation, “robots,” “spiders,” or any other similar technological devices which access the APP / Website or any APP / Website resource.</li>
                                          <li>Using APP / Website communication systems, including but not limited to the “share” and/or “ask a question” features relating to any proposed project or product, for any commercial solicitation purposes or for any other purpose than The Laoe Maom Group / LM CLUB’s intended purpose of such feature.</li>
                                          <li>Attempting to disrupt network services or services of the APP / Website.</li>
                                          <li>Attempting to disrupt network services or services of third-party networks using the APP / Website’s internet access service or other services and/or features.</li>
                                          <li>Attempting to access or collect third-party personal information.</li>
                                          <li>Attempting to access or collect The Laoe Maom Group / LM CLUB’s confidential information or confidential information of distributors, customers, and/or other dealers with which The Laoe Maom Group / LM CLUB has been entrusted.</li>
                                          <li>Using the APP / Website in any way that places an excessive burden on the APP / Website’s resources or infrastructure.</li>
                                          <li>Interfering with other users’ use of the APP / Website.</li>
                                          <li>Engaging in the harvesting or collecting information about other users of the APP / Website, including e-mail addresses.</li>
                                        </ul>
                                    </h1>

                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        Violation of the foregoing obligations may result in immediate suspension or termination of your Account without notice to you as well as criminal and civil penalties as well as the exercise by The Laoe Maom Group / LM CLUB of any remedies or recourses available to it under applicable laws.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        You agree that upon becoming aware of any inappropriate conduct or content on the APP / Website, you shall report such conduct and/or content to The Laoe Maom Group / LM CLUB immediately.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                        13. Disclaimers
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        The APP / Website, Content and Services are provided on an “as is”, “as available” basis without warranties or conditions of any kind and access to and use of any of the foregoing is at your sole risk. The Laoe Maom Group / LM CLUB and its affiliates specifically disclaim any implied warranties and conditions of any kind in regard to the APP / Website, Content, and Services including, without limitation, those relating to merchantability, quality, fitness for a particular purpose, compliance with applicable laws, currency, accuracy, availability, reliability, uninterrupted use, error free use (or that errors will be corrected), safety, secure access, secure use, security, malware-free state, reliability, conformity with legal requirements, and non-infringement of third party rights, to the maximum extent permitted by law. Without limitation to the generality of the foregoing, The Laoe Maom Group / LM CLUB makes no warranty in regard to the accuracy of any pricing, description or pictures of products shown on the APP / Website, and the color of products, as shown on the APP / Website.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        The Laoe Maom Group / LM CLUB is under no obligation to monitor or update the Content. The Content may be changed or removed by The Laoe Maom Group / LM CLUB without notice to you. The Laoe Maom Group / LM CLUB is not responsible for any content or information that you may find undesirable or objectionable. Accessing the Content from states or territories where it may be illegal to do so is a violation of these Terms of Use
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        you acknowledge and understand that certain procedures, processes, practices, methods, methodologies, approaches, techniques and inventions forming part of the Content may result in property damage, personal injury and/or death (and are not a substitute for proper training or a substitute for consultation or use of duly qualified professionals) and that you are solely responsible for determining whether the foregoing are appropriate having regard to the circumstances at hand, and for ensuring that adequate safety and other precautions are in place in terms of the delivery, execution or realization of the foregoing. You acknowledge and understand that legal requirements in terms of renovation and construction projects vary from one jurisdiction to another and may change with the passing of time. You are solely responsible for ensuring that the information embedded in any Content is consistent with any requirements under applicable laws and regulations, and is current and up-to-date.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        The information and opinions expressed in any forum on the APP / Website (including those for product reviews) are those of their respective authors and are not made, confirmed or endorsed by The Laoe Maom Group / LM CLUB (or its affiliated or related entities), its distributors and/or authorized dealers. Furthermore, neither The Laoe Maom Group / LM CLUB nor its affiliated or related entities or its content providers are responsible or liable in any manner and to any extent to any person or entity whatsoever with respect to use or reliance on such Content.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     The Laoe Maom Group / LM CLUB is not required to assess or otherwise determine the validity or legitimacy of any complaints or demands that it may receive regarding any Content, including, without limitation, any User Comments or User Content, before The Laoe Maom Group / LM CLUB takes any remedial action that it considers, in its sole discretion, to be appropriate.

                                    The Laoe Maom Group / LM CLUB and its affiliates assume no responsibility or liability for the deletion or failure to store or provide access, or to properly store or provide access, to any Content (including, without limitation, any User Comments and User Content).

                                    Through your use of the APP / Website and Services, you may have the opportunity to engage in commercial transactions with third parties. All such transactions are at your sole risk. The Laoe Maom Group / LM CLUB is not a party to any such transactions and disclaims any and all liability regarding all such transactions.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     You are solely responsible for implementing safeguards to protect your computer system and data and you are solely responsible for the entire cost of any service, repairs or corrections necessary as a result of the use of the APP / Website, Content, or Services. You assume the entire risk in downloading or otherwise accessing any Content or other materials obtained from The Laoe Maom Group / LM CLUB, the APP / Website or third parties as part of the Services. Although the APP / Website uses encryption for the handling of personal or sensitive information, there is no guarantee that such information and transactions on the APP / Website or on the internet will be maintained confidential and secure. The use of the APP / Website, Services, and/or the Content is at your sole risk.

                                    You acknowledge and confirm that this section 13 constitutes an essential and material provision of the agreement between you and The Laoe Maom Group / LM CLUB and that in the absence of the protection provided to The Laoe Maom Group / LM CLUB pursuant to this provision, The Laoe Maom Group / LM CLUB would not have provided you with any right or other benefit in regards to the APP / Website, Content, Services and/or Products.

                                    Please note that consumer protection laws may exclude or limit the application of the foregoing disclaimer and that in such circumstances this section 13 may not apply to you or may apply with certain modifications so that it complies with the laws that apply in the jurisdiction in which you reside.
                                     </h1>

                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                    14. Exclusions; Limitation of Liability
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     The Laoe Maom Group / LM CLUB, its parent, its affiliates, its distributors and its authorized dealers together with each of their respective directors, employees, contractors, service providers, agents, licensors, and other representatives (collectively, the “The Laoe Maom Group / LM CLUB Released Parties”) will not be liable for any indirect, incidental, consequential, punitive, or special damages you or any third party may suffer in relation to the APP / Website, Content, Services, and/or Products and the other subject matter of these Terms of Use (and any document incorporated by reference in these Terms of Use), including, without limitation, lost profits, loss of revenue, loss of business opportunity, work stoppage, failure to realize expected savings, loss of reputation, depreciation of goodwill, loss of use, and lost data, even if a The Laoe Maom Group / LM CLUB Released Party has been advised of the possibility of such damages or claims. The maximum liability of the The Laoe Maom Group / LM CLUB Released Parties for direct damages relating to the APP / Website, Content, and/or Services will not exceed ten dollars ($10) in the aggregate.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    The foregoing exclusions and limitations will apply notwithstanding any failure of essential purpose of any remedy and are fundamental elements of the bargain between The Laoe Maom Group / LM CLUB and you.
                                    </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    You acknowledge and confirm that this section 14 constitutes an essential and material provision of the agreement between you and The Laoe Maom Group / LM CLUB and that in the absence of the protection provided to The Laoe Maom Group / LM CLUB pursuant to this provision, The Laoe Maom Group / LM CLUB would not have provided you with any right or other benefit in regards to the APP / Website, Content, Services, and/or Products.
                                    </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    Please note that applicable laws in the state in which you reside may exclude or limit the application of the foregoing exclusion and limitation of liability and that in such circumstances, this section 14 may not apply to you or may apply with certain modifications so that it complies with the laws that apply in the jurisdiction in which you reside.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                    15. Indemnification
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     You agree to defend, indemnify, and hold harmless the The Laoe Maom Group / LM CLUB Released Parties from and against any and all losses, actions, claims, damages, costs, and expenses (including, without limitation, legal fees, expert fees, and disbursements) (collectively, “Damages”) arising from or related to: (i) your use of the APP / Website (regardless as to whether or not such use is permitted under these Terms of Use), including, without limitation, any User Comments and/or User Content you submit or post on the APP / Website; (ii) your use of any Content, Services, and/or Products; (iii) any remanufacture, modification, or other change in the design or function of any Product or Product labeling; and/or (iv) your failure to update any information you have provided to The Laoe Maom Group / LM CLUB (including any information in your Account).
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     You represent and warrant that you hold the account corresponding to any telephone number and any email address that you provide to The Laoe Maom Group / LM CLUB or that you have the account holder’s permission to use such telephone number and email address. You agree to defend, indemnify, and hold harmless the The Laoe Maom Group / LM CLUB Released Parties (including any party initiating communications on their behalf) from and against any and all Damages (including those related to or arising under the Telephone Consumer Protection Act) arising from, related to, or caused in whole or in part by (i) your provision of a telephone number or email address that you are not authorized to provide or (ii) your failure to notify The Laoe Maom Group / LM CLUB if you change your telephone number or email address.
                                    </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     The Laoe Maom Group / LM CLUB reserves the right, in its sole discretion, to assume the exclusive defense and control of any matter subject to indemnification by you. In all events, you shall cooperate fully in the defense of any indemnified claim.
                                    </h1>
                                     
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                        16. Termination
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     The Laoe Maom Group / LM CLUB may, in its sole discretion, terminate your rights under these Terms of Use with or without cause. The Laoe Maom Group / LM CLUB may terminate your rights under these Terms of Use without notice if you fail to comply with any of its terms or conditions. Any such termination by The Laoe Maom Group / LM CLUB will be in addition to and without prejudice to other rights and remedies as may be available to The Laoe Maom Group / LM CLUB, including injunctive relief and other equitable remedies.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     You may terminate your Account by providing written notice of such termination to The Laoe Maom Group / LM CLUB. Termination of your Account may take up to five (5) business days to take effect. Termination of your Account will not limit or otherwise qualify the application of these Terms of Use to the extent you continue to access and use the APP / Website, Services, and/or Content following such termination. The Laoe Maom Group / LM CLUB may retain information related to your Account, including, without limitation, personal information, in the event of potential litigation, to comply with its obligations under applicable laws or to the extent otherwise permitted under applicable laws.
                                    </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     Upon termination of your rights under these Terms of Use, all licenses granted to you under these Terms of Use will forthwith terminate and you must securely and permanently delete all Content in your possession or under your control. The disclaimers, exclusion of liability, limitation of liability, ownership and copyright, effect of termination, interpretation, license you have granted to The Laoe Maom Group / LM CLUB regarding your User Content, the representations and warranties you provide, and the indemnity provision of these Terms of Use will survive the termination of these Terms of Use.
                                    </h1>
                                     
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                   17. Notices
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     You may communicate with The Laoe Maom Group / LM CLUB via e-mail, postal mail, telephone, and/or the APP / Website. The Laoe Maom Group / LM CLUB may issue notices to you via these various channels, including by sending e-mail to an address you provide to The Laoe Maom Group / LM CLUB. You agree that such notices shall have legal effect. You also agree that any notices sent by e-mail satisfy any requirement that notices be provided in writing. You may have the right to withdraw your consent to receive certain electronic communications, and, when required by law, The Laoe Maom Group / LM CLUB will provide you with paper copies upon request. You may make such a request via e-mail, postal mail, telephone, and/or the APP / Website. If you withdraw your consent, The Laoe Maom Group / LM CLUB reserves the right to terminate your rights to use the APP / Website. To receive, access, and retain the notices that The Laoe Maom Group / LM CLUB sends via e-mail, you must have Internet access and a computer or device with a compatible web browser. You will also need software capable of viewing files in PDF format. Your device or computer must have the ability to print (or download and store) e-mails and PDF files. By accepting these Terms of Use, you confirm that you are able to receive, access, and retain the notices that The Laoe Maom Group / LM CLUB may send.
                                     </h1>
                                     
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                    18. Governing Law
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        Any claim relating to the APP / Website, Services, Content, or Products will be governed by the laws of the State of New York without regard to its conflict of law provisions.
                                     </h1>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        In the event of a dispute between you and The Laoe Maom Group / LM CLUB, you agree to submit to the non-exclusive jurisdiction of the United States District Court for the Southern District of New York or, if such court would not have jurisdiction over the matter, then only in a New York state court sitting in the Borough of Manhattan, City of New York.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                        You hereby waive any right you may have to: (i) a trial by jury; and (ii) the commencement of or participation in any class action against any The Laoe Maom Group / LM CLUB Released Party related to the APP / Website, Services, Content, Products, and/or these Terms of Use and, where applicable, you also agree to opt out of any class proceedings against The Laoe Maom Group / LM CLUB. The foregoing provision may not be enforceable pursuant to the laws in the jurisdiction in which you reside and, in such cases, the provision will be modified to comply with applicable laws.
                                    </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                        19. Interpretation
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     The division of these Terms of Use into sections and the insertion of headings are for convenience of reference only and shall not affect the construction or interpretation of these Terms of Use. In these Terms of Use, words importing the singular number include the plural and vice versa; words importing gender include all genders; and words importing persons include individuals, sole proprietors, partnerships, corporations, trusts and unincorporated associations, and any other entity.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                    20. Entire Agreement
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     The agreement formed by these Terms of Use, as these may be amended from time to time (and supplemented by any document incorporated by reference in these Terms of Use, including the Online Privacy Policy), and any and all other legal notices and policies on the APP / Website, constitute the entire agreement between you and The Laoe Maom Group / LM CLUB with respect to access to and use of the APP / Website, Services, and Content, and the other subject matter of these Terms of Use (and any documents incorporated by reference in these Terms of Use).
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                   21. Waiver
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     No waiver of any provision of these Terms of Use will be binding on The Laoe Maom Group / LM CLUB unless executed by The Laoe Maom Group / LM CLUB in writing. No waiver of any of the provisions of these Terms of Use will be deemed to be or will constitute a waiver of any other provision (whether or not similar) nor shall such waiver constitute a continuing waiver unless otherwise expressly provided.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                   22. Severability
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     Any provision of these Terms of Use (or portion of a provision) which is held by a court of competent jurisdiction to be illegal, invalid, or unenforceable in such jurisdiction will, as to that jurisdiction, be ineffective to the extent of such illegality, invalidity, or unenforceability and will otherwise be enforced to the maximum extent permitted by law, all without affecting the remaining provisions (and the remaining enforceable portion of such provision, as the case may be) of these Terms of Use or affecting the legality, validity, or enforceability of such provision in any other jurisdiction.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-4'>
                                   <h1 className="mx-3 text-xl font-medium">
                                   23. Enurement
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     These Terms of Use shall enure to the benefit of The Laoe Maom Group / LM CLUB’s successors and assigns.
                                     </h1>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mb-8'>
                                   <h1 className="mx-3 text-xl font-medium">
                                   24. Confirmation
                                   </h1>
                                   <div className='ml-4'>
                                     <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                     You acknowledge having read these Terms of Use before accepting them, having the authority to accept these Terms of Use and having had the opportunity to save or print a copy of these Terms of Use.
                                     </h1>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<Footer/>
</>
  )
}

export default TermsAndConditions