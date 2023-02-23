import { Link } from "react-router-dom";

export default function Navigation() {
return (
<>
      <div className="wrapper">
            <h1>Welcome To My App</h1>
            <p>This is going to be the coolest app in the world!</p>
            <Link to="/welcome">Click to view my welcome page</Link><br/>
            <Link to="/list">Click to view my list of users page</Link>
      </div>
      <div>
      



      </div>
</>
);
}
