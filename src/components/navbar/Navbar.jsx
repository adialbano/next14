import Link from "next/Link";

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/">Hem</Link>
        <Link href="/om-mig">Om Mig</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/blogg">Blogg</Link>
      </div>
    </div>
  );
};

export default Navbar;
