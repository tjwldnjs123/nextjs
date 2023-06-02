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
            className="w-[500px]  mb-10 flex flex-col justify-center items-center bg-yellow-100 p-2"
            key={meetup.id}
          >
            <img src={meetup.image} />
            <div>{meetup.title}</div>
            <div>{meetup.description}</div>
            <button
              className="border border-gray-400  rounded-lg p-2"
              onClick={() => onDetailMeetup(meetup.id)}
            >
              Show Details
            </button>
          </Card>
        );
      })}
    </>
  );
}
