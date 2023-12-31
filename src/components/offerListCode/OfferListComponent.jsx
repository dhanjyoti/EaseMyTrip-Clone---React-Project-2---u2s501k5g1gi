import React, { useRef } from 'react'
import OfferListCode from './OfferListCode';

const OfferListComponent = () => {
    const scrollerRef = useRef(null);

    const prevScroll = () => {
      scrollerRef.current?.scrollBy(-306, 0);
      if (scrollerRef.current.scrollLeft == 0) {
        scrollerRef.current.scrollLeft = scrollerRef.current.scrollWidth;
      }
    };
  
    const nextScroll = () => {
      scrollerRef.current?.scrollBy(306, 0);
      if (
        scrollerRef.current.scrollLeft + scrollerRef.current.clientWidth >=
        scrollerRef.current.scrollWidth
      ) {
        scrollerRef.current.scrollLeft = 0;
      }
    };  
  return (
    <div className="flex flex-col">
            <div className="w-[955px] relative h-fit p-4">
              <button
                onClick={() => prevScroll()}
                className="ml-[5px] absolute text-black z-10 left-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center  justify-center w-5 h-5 bg-white text-lg"
              >
                {"<"}
              </button>
              <button
                onClick={() => nextScroll()}
                className="mr-[5px] absolute text-black z-10 right-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center  justify-center w-5 h-5 bg-white text-lg"
              >
                {">"}
              </button>
              <div
                ref={scrollerRef}
                className="scroll-smooth snap-mandatory snap-x flex flex-row overflow-x-auto scroller gap-x-2"
              >
                <OfferListCode
                  code={"BOBEMI"}
                  tagline={
                    " | Get up to Rs.7500 OFF for payments made via BOB Credit Cards EMI."
                  }
                />
                <OfferListCode
                  code={"IDBIEMT"}
                  tagline={
                    " | Get up to Rs.7500 OFF for payments made only via IDBI Bank Debit Card and Credit Card."
                  }
                />
                <OfferListCode
                  code={"EMTDCIND"}
                  tagline={
                    " | Get up to Rs.5000 OFF for payments made only via Indian Bank Mastercard Debit Cards only."
                  }
                />
                <OfferListCode
                  code={"EMTMBK"}
                  tagline={" | Get up to Rs.500 OFF for payments via MobiKwik."}
                />
                <OfferListCode
                  code={"DELIGHT"}
                  tagline={
                    " | Win a Flight, Hotel stay and Holiday and Get assured voucher worth INR 5000"
                  }
                />
                <OfferListCode
                  code={"ICICIAMZ"}
                  tagline={
                    " | Get up to Rs.5000 OFF for payments via ICICI Amazon Co-Branded Credit Card."
                  }
                />
              </div>
            </div>
          </div>
  )
}

export default OfferListComponent