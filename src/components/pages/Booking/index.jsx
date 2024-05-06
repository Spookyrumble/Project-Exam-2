import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchVenue from "../../API/fetch/Venue";
import MyBookingCalendar from "../../Calendar";
import ImageCarousel from "../../Cards/_components/Images";
import Description from "../../Cards/_components/Description";
import Address from "../../Cards/_components/Address";
import Price from "../../Cards/_components/Price";
import Meta from "../../Cards/_components/Meta";

const Booking = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const { id } = useParams();
  const { venue, loading, error } = FetchVenue(id);
  const data = venue.data;
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const toggleExpanded = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="max-w-[600px] m-auto bg-background">
      <ImageCarousel
        images={data.media}
        imageStyle={{ height: `auto`, width: `600px` }}
      />
      <div className="px-3 m-auto">
        <h1 className="text-2xl text-ellipsis overflow-hidden">{data.name}</h1>
        <div className="my-5 flex justify-between p-5 gap-5">
          <Address object={data.location} />
          <Meta object={data.meta} />
        </div>
        <div className="my-5">
          <Price price={data.price} />
        </div>
        <div className="my-5">
          <Description
            description={data.description}
            isExpanded={expandedCard === venue.id}
            toggleExpanded={() => toggleExpanded(venue.id)}
          />
        </div>
      </div>
      <div className="my-5">
        <MyBookingCalendar bookings={data.bookings} />
      </div>
    </div>
  );
};

export default Booking;