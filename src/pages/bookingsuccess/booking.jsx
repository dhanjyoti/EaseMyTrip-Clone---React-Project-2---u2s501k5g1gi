import { useEffect } from "react";
import HeaderItem from "../../components/HeaderItem/HeaderItem";
import { useBooking } from "../../utils/useBooking";
import { useSearchParams } from "react-router-dom";

const BookingSuccess = () => {
  const { booking } = useBooking();
  const [params] = useSearchParams();

  const type = params.get("type");

  if (!booking) {
    return "No bookings";
  }

  return (
    <div className="flex flex-col p-20 gap-7 mx-20">
      <div className=" text-2xl font-bold text-center">
        {booking.length > 0 ? (
          <span>
            {type === "history" ? "Booking history" : "Booking was successful."}
          </span>
        ) : (
          "No bookings found."
        )}
      </div>

      {booking?.map((b) => {
        return (
          <HeaderItem
            key={b.id}
            header={
              <div>
                <span className="capitalize">{b.type}</span> detail
              </div>
            }
          >
            <div className="p-5 shadow-md flex flex-row items-center justify-between">
              <div className="flex flex-col gap-3 p-3">
                <div>
                  <div className="font-bold">User name</div>
                  <div>{b.userName}</div>
                  <div className="pt-3">
                    <span className="font-bold">Booked on</span>{" "}
                    {new Date(b.date).toLocaleString("en-US")}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>{b.name}</div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col fontb">
                      <span>{b.extra}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xl font-bold text-[#d63b05]">{b.price}</div>
            </div>
          </HeaderItem>
        );
      })}
    </div>
  );
};

export default BookingSuccess;
