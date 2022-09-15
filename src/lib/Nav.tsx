import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <div>This is the nav...</div>
      <Link to={`/`}>Go to home</Link>
      <Link to={`/potato`}>Go to the potato page</Link>
    </nav>
  );
}
