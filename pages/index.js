import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/dashboard"}>
        <button>dashbourd</button>
      </Link>
    </div>
  );
}
