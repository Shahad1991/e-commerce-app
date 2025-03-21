import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex space-x-4">
          
          <li>
            <Link href="/products">
            Products
            </Link>
          </li>
          <li>
            <Link href="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link href="/checkout">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}