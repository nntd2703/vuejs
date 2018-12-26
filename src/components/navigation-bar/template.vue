<template>
  <div class="navigationBar">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light w-100 pl-0" id="navbar">
          <a href="/" class="navbar-brand"><img src="../../assets/artboard-2-copy.png"></a>
          <span class="ml-auto imgSearchMobile p-3">
                            <img src="../../assets/search.svg" alt="" class="img-fluid"></span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center w-100" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" ondblclick="renderOurProduct();"
                   id="navbarDropdownMenuLink"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Our Product
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Product 1</a></li>
                  <li><a class="dropdown-item" href="#">Product 2</a></li>
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Product
                    3</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Product 3.1</a></li>
                      <li><a class="dropdown-item" href="#">Product 3.2</a></li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"
                                                      href="#">Product 3.3</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Product 3.3.1</a></li>
                          <li><a class="dropdown-item" href="#">Product 3.3.2</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"
                                                      href="#">Product 3.4</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Product 3.4.1</a></li>
                          <li><a class="dropdown-item" href="#">Product 3.4.2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Meeting Founder</a>
              </li>
            </ul>
          </div>
          <span class="ml-auto imgSearch">
                            <img src="../../assets/search.svg" alt="" class="img-fluid"></span>
        </nav>
      </div>
    </div>
  </div>
</template>
<script src="../navigation-bar/component.js"></script>
<style lang="sass" scoped>
  @import '../navigation-bar/style.scss'
</style>
