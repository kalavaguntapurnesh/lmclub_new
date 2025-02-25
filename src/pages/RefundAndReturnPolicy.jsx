import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
const RefundAndReturnPolicy = () => {
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
                                    Refund and Returns Policy
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
                                    Overview
                               </h1>
                               <div className='ml-4'>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                 Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can't offer you a full refund or exchange.
                                 </h1>
                                <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                                </h1>
                                <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
                                </h1>
                                <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                Additional non-returnable items:
                                 </h1>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    <ul className="list-disc pl-7 p-2">
                                      <li>Gift cards</li>
                                      <li>Downloadable software products</li>
                                      <li>
                                        Some health and personal care items
                                      </li>
                                    </ul>
                                </h1>
                                <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                To complete your return, we require a receipt or proof of purchase.
                                </h1>
                                <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                Please do not send your purchase back to the manufacturer.
                                </h1>
                                <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                There are certain situations where only partial refunds are granted:
                                </h1>
                                <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    <ul className="list-disc pl-7 p-2">
                                      <li>Book with obvious signs of use</li>
                                      <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
                                      <li>
                                      Any item not in its original condition, is damaged or missing parts for reasons not due to our error.
                                      </li>
                                      <li>Any item that is returned more than 30 days after delivery</li>
                                    </ul>
                                </h1>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 mb-4'>
                               <h1 className="mx-3 text-xl font-medium">
                                 Refunds
                               </h1>
                               <div className='ml-4'>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                 Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                                 </h1>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                 If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
                                 </h1>
                                 <h1 className="mx-3 text-xl font-medium">
                                 Late or missing refunds
                                </h1>
                                <div className='ml-4'>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    If you haven't received a refund yet, first check your bank account again.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    Then contact your credit card company, it may take some time before your refund is officially posted.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    Next contact your bank. There is often some processing time before a refund is posted.
                                    </h1>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    If you've done all of this and you still have not received your refund yet, please contact us at <a href='richard8445@gmail.com' className='text-green-600 hover:underline'>richard8445@gmail.com.</a>
                                    </h1>
                                </div>
                                <h1 className="mx-3 text-xl font-medium">
                                    Sale items
                                </h1>
                                <div className='ml-4'>
                                    <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    Only regular priced items may be refunded. Sale items cannot be refunded.
                                    </h1>
                                   
                                </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 mb-4'>
                               <h1 className="mx-3 text-xl font-medium">
                                 Exchanges
                               </h1>
                               <div className='ml-4'>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                 We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href='richard8445@gmail.com' className='text-green-600 hover:underline'>richard8445@gmail.com.</a> and send your item to: physical address
                                 </h1>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 mb-4'>
                               <h1 className="mx-3 text-xl font-medium">
                               Gifts
                               </h1>
                               <div className='ml-4'>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                 If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
                                 </h1>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    If the item wasn't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and they will find out about your return.
                                 </h1>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 mb-4'>
                               <h1 className="mx-3 text-xl font-medium">
                               Shipping Returns
                               </h1>
                               <div className='ml-4'>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                 To return your product, you should mail your product to: physical address.
                                 </h1>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                                </h1>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                Depending on where you live, the time it may take for your exchanged product to reach you may vary.
                                </h1>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.
                                 </h1>
                                 <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                    If the item wasn't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and they will find out about your return.
                                 </h1>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 mb-8'>
                               <h1 className="mx-3 text-xl font-medium">
                               Need Help?
                               </h1>
                               <div className='ml-4'>
                                <h1 className="mx-3 lg:text-lg text-sm text-[#43474e]">
                                Contact us at <a href='richard8445@gmail.com' className='text-green-600 hover:underline'>richard8445@gmail.com.</a> for questions related to refunds and returns.
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

export default RefundAndReturnPolicy