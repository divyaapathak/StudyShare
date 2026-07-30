import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <Link to="/" className="logo">
            <BookOpen size={28} />
            <span>StudyShare</span>
          </Link>

          <ul className={open ? "nav-links active" : "nav-links"}>
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/notes" onClick={() => setOpen(false)}>Browse Notes</Link></li>
            <li><Link to="/upload" onClick={() => setOpen(false)}>Upload</Link></li>
            <li><Link to="/profile" onClick={() => setOpen(false)}>Profile</Link></li>
          </ul>

          <div className="nav-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </div>

          <div className="menu-icon" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </nav>

      <style>{`
.navbar{
    width:100%;
    background:#fff;
    border-bottom:1px solid #e5e7eb;
    box-shadow:0 2px 10px rgba(0,0,0,.05);
}

.nav-container{
    max-width:1200px;
    margin:auto;
    height:80px;
    padding:0 25px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    display:flex;
    align-items:center;
    gap:8px;
    text-decoration:none;
    color:#2563eb;
    font-size:24px;
    font-weight:700;
}

.logo span{
    color:#374151;
}

.nav-links{
    display:flex;
    list-style:none;
    gap:35px;
}

.nav-links li a{
    text-decoration:none;
    color:#475569;
    font-weight:500;
    transition:.3s;
}

.nav-links li a:hover{
    color:#2563eb;
}

.nav-buttons{
    display:flex;
    gap:12px;
}

.login-btn{
    padding:10px 22px;
    border:2px solid #2563eb;
    border-radius:8px;
    color:#2563eb;
    text-decoration:none;
    font-weight:600;
}

.login-btn:hover{
    background:#2563eb;
    color:#fff;
}

.register-btn{
    padding:10px 22px;
    background:#2563eb;
    color:#fff;
    border-radius:8px;
    text-decoration:none;
    font-weight:600;
}

.register-btn:hover{
    background:#1d4ed8;
}

.menu-icon{
    display:none;
    cursor:pointer;
}

@media(max-width:768px){

.menu-icon{
display:block;
}

.nav-buttons{
display:none;
}

.nav-links{
position:absolute;
top:80px;
left:0;
width:100%;
background:#fff;
display:none;
flex-direction:column;
align-items:center;
padding:25px 0;
gap:20px;
box-shadow:0 10px 20px rgba(0,0,0,.08);
}

.nav-links.active{
display:flex;
}
}
      `}</style>
    </>
  );
}