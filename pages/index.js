import MongoClient from "mongodb/lib/mongo_client";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetUpList";
import styles from "../styles/Home.module.css";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://media.istockphoto.com/id/1124629093/ko/%EC%82%AC%EC%A7%84/%EB%93%B1%EC%82%B0%EA%B0%9D-%ED%83%9C%EC%96%91-%EC%88%98%ED%8F%89%EC%84%A0%EC%9D%84-%EB%B3%B4%EA%B3%A0.jpg?s=612x612&w=is&k=20&c=6o8epH5ztXAQotzcLvaxYo5iSoe6wnWfmYvIMGMgRvc=",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media.istockphoto.com/id/1292251389/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EC%B9%A8%EC%97%90-%EB%A3%A8%EA%B0%80%EB%85%B8-%ED%98%B8%EC%88%98-%EC%9C%84%EC%9D%98-%EC%84%B1%EC%88%99%ED%95%9C-%EC%BB%A4%ED%94%8C-%ED%95%98%EC%9D%B4%ED%82%B9.jpg?s=612x612&w=is&k=20&c=hUiwEk8kgF0YbkqFYaaSjnl72aUABzNySDhzLRqlD-U=",
    address: "Some address 6, 123456 Some City",
    description: "This is a Second meetup!!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1677560519659-d04e0d428181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    address: "Some address 7, 123456 Some City",
    description: "This is a Third meetup!!",
  },
];

export default function Home(props) {
  return (
    <div className="flex flex-col items-center mt-[10%] ">
      <MeetupList meetupsData={props.meetups} />
    </div>
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
