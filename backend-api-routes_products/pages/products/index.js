import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Product() {
  const { data, isLoading } = useSWR("../api/products", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {console.log(data)}
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`products/${product.id}`}>
            {product.name} {product.id}
          </Link>
        </li>
      ))}
    </ul>
  );
}
