export default function MeetupList({ meetupsData }) {
  return (
    <>
      {meetupsData?.map((meetup) => {
        return (
          <div
            className="flex flex-col justify-center items-center bg-yellow-100"
            key={meetup.id}
          >
            <img src={meetup.image} />
            <div>{meetup.title}</div>
            <div>{meetup.description}</div>
            <button>Show Details</button>
          </div>
        );
      })}
    </>
  );
}
