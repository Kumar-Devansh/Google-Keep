import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  const links = [
    { to: '/dashboard', label: 'Notes' },
    { to: '/archive', label: 'Archive' },
    { to: '/trash', label: 'Trash' },
    { to: '/labels', label: 'Labels' }
  ];

  return (
    <div className="sidebar">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={pathname === link.to ? 'active' : ''}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;