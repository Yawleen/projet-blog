import Link from "next/link";
import style from "./Navbar.module.css";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const navLinks = [
    { title: "Accueil", paths: ["/", /^\/$/] },
    { title: "Blog", paths: ["/blog", /^\/blog(\/.*)?$/] },
    { title: "Liste", paths: ["/liste", /^\/liste(\/.*)?$/] },
  ];

  return (
    <nav className={style.navbar}>
      {navLinks.map((link) => (
        <Link key={link.title} href={link.paths[0]}>
          <a
            className={link.paths[1].test(router.pathname) ? style.active : ""}
          >
            {link.title}
          </a>
        </Link>
      ))}
    </nav>
  );
}
