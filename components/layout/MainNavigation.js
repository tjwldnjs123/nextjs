import Link from "next/link";

export default function MainNavigation() {
  return (
    <div className="bg-yellow-200 fixed top-0 w-full flex flex-row justify-between h-20 items-center px-6 font-bold text-blue-300">
      <div className="text-3xl">Meetups</div>
      <ul className="flex flex-row text-xl justify-between w-[20%]">
        <li>
          <Link href="/">All Meetups</Link>
        </li>
        <li>
          <Link href="/new-meetup">Add New Meetup</Link>
        </li>
      </ul>
    </div>
  );
}
