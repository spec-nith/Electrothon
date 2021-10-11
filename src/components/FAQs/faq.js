import React from 'react'
import './faq.css';
export default function faq() {
    const FaqTab= (props)=>{
        return(
            <div class="border-b faqs-tab" style= {{overflow: 'hidden'}}>
            <div class="border-l-2 border-transparent relative">
                <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"/>
                <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none faqs-tab-label" for="chck1">
                    <span class="text-grey-darkest font-thin text-xl">
                        Massa vitae tortor condimentum lacinia quis vel eros donec
                    </span>
                    <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center faqs-test">
                 
                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9">
                            </polyline>
                        </svg>
                    </div>
                </header>
                <div class="faqs-tab-content">
                    <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                        <ul class="pl-4">
                            <li class="pb-2">
                                consectetur adipiscing elit
                            </li>
                            <li class="pb-2">
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </li>
                            <li class="pb-2">
                                Viverra orci sagittis eu volutpat odio facilisis mauris
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div>


<div class="w-3/5 p-8 mx-auto">
            <section class="shadow row">
                <div class="faqs-tabs">
                  <FaqTab />
                  <FaqTab />
                  <FaqTab />
                  <FaqTab />
                  <FaqTab />

                   </div>
            </section>
        </div>
        </div>
    )
}
