import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((movies, index) => (
          <li key={index}>
            <Link href={`/volumes/${volumes[index].slug}`}>
              {volumes[index].title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          function getRandomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
          }
          router.push(`/volumes/${getRandomElement(volumes).slug}`);
        }}
      >
        Get Random Volume
      </button>
    </>
  );
}
