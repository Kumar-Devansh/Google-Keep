import { Link } from "react-router-dom";

const Sidebar = () => {

return ( <div className="sidebar">

  <Link to="/dashboard">Notes</Link>
  <Link to="/archive">Archive</Link>
  <Link to="/trash">Trash</Link>
  <Link to="/labels">Labels</Link>
</div>

);
};

export default Sidebar;
