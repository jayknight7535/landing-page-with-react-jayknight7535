const Navbar = () => {
    return (
<ul class="nav justify-content-end bg-dark">
  <a class="navbar-brand me-auto p-2" href="#" id= "Navbar">Navbar</a> 
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Disabled</a>
  </li>
</ul>
    )
}
export default Navbar