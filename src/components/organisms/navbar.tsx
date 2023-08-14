import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link href="/">
          <button className="navbar-btn">Home</button>
        </Link>
        <Link href="/pentous-planner">
          <button className="navbar-btn">Pentous Planner</button>
        </Link>
        <Link href="/jart">
          <button className="navbar-btn">JART</button>
        </Link>
        <Link href="https://www.youtube.com/shorts/F_vaWuU7SZ0" target="_blank">
          <button className="navbar-btn">Elevator Pitch</button>
        </Link>
      </ul>
    </div>
  );
}
