import Link from 'next/link';

export default function Nav() {
  return (
    <div>
      <Link href="/products">Products</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/account">Account</Link>
    </div>
  );
}
