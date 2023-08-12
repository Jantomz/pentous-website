export default function Navbar() {
  return (
    <div>
      <ul>
        <a href="/">
          <button className="navbar-btn">Home</button>
        </a>
        <a href="/categorizer">
          <button className="navbar-btn">Categorizer</button>
        </a>
      </ul>
    </div>
  );
}
