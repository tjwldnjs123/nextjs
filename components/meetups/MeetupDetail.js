import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function MeetupDetail({ meetupData }) {
  return (
    <div className="mt-[200px] flex flex-col justify-center items-center">
      <img src={meetupData.image} alt="meetup image" />
      <h2>{meetupData.title}</h2>
      <p>{meetupData.address}</p>
      <p>{meetupData.description}</p>
    </div>
  );
}

export default MeetupDetail;
