import MongoClient from "mongodb/lib/mongo_client";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetUpList";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <>
      {/* <Head>
        <title>Nextjs Meetup</title>
      </Head> */}
      <div className="flex flex-col items-center mt-[10%] ">
        <MeetupList meetupsData={props.meetups} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://zioni:ODhO39e0WvWbe9KV@cluster0.zk2cbzs.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
