export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/products">Products</a> |{' '}
            <a href="/cart">Cart</a> | <a href="/checkout">Checkout</a> |{' '}
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 Sofa Shop. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
