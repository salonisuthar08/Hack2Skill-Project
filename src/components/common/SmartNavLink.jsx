import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function SmartNavLink({ to, className, onClick, children, ...rest }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    // If user clicks link to the current path, replace instead of pushing
    if (location.pathname === to) {
      event.preventDefault();
      navigate(to, { replace: true });
    }
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <NavLink to={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </NavLink>
  );
}

export default SmartNavLink;

