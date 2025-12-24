import './Nav.css'
function Nav() {
  return (
    <nav>
        <ul id='Navbar_items'>
            <li>
                <ul id='List_items_title'>
                    <li><a href="#"><img src="/Logo.png" alt="Bank Logo" className="logo"/></a></li>
                    <li><a href="#"><h2>Sample Bank Application</h2></a></li>
                </ul>
            </li>
            <li>
                <ul id="list_items_content">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Transactions</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="/login"><button>Login / Sign Up</button></a></li>
                </ul>
            </li>
        </ul>    
    </nav>
  );
}
export default Nav;