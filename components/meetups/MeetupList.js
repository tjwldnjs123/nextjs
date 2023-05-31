import { Card } from "@mui/material";
import { useRouter } from "next/router";

export default function MeetupList({ meetupsData }) {
  const router = useRouter();

  const onDetailMeetup = (id) => {
    console.log(router);
    router.push("/" + id);
  };
  return (
    <>
      {meetupsData?.map((meetup) => {
        return (
          <Card
            className="w-[500px]  mb-10 flex flex-col justify-center items-center bg-yellow-100"
            key={meetup.id}
          >
            <img src={meetup.image} />
            <div>{meetup.title}</div>
            <div>{meetup.description}</div>
            <button onClick={() => onDetailMeetup(meetup.id)}>
              Show Details
            </button>
          </Card>
        );
      })}
    </>
  );
}
