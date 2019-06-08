class Header {
  constructor() {
    return (
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Ecommerce</title>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Poppins|Dancing+Script|Roboto+Condensed|Rokkitt|Pathway+Gothic+One|Poppins+Round|Noto+Sans" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
       </head>

      <body>
      <div class='main'>
      <div class='landing'>

        <header>
          <div class='header_inside'>

            <div class='logo'>
              <h1><a href='index.html'>shooop.</a></h1>
            </div>

            <!-- icon menu in responsive -->
            <div class='icon_menu'><img src='images/menu.png'></div>

            <div class='menu'>
              <ul>
                <li><a href='about.html'>about</a></li>
                <li><a href='shop.html'>shop</a></li>
                <li><a href='wishlist.html'>my wishlist</a></li>
                <li><a href='cart.html'>my cart</a></li>
              </ul>
            </div>

            <div class='wish_cart_icon'>

              <!-- cart icon -->
              <div class='div_cart div_icon'>
                <div class='image_relative'>
                <a href='cart.html'><img src='images/cart.png'></a>
                <div class='tag tag_cart'>
                  <p class='the_cart_count'>My cart</p>
                </div>
                <div class='counterCart'><p></p></div>
              </div>
              </div>

              <!-- wishlist icon -->
              <div class='div_wish div_icon'>
                <div class='image_relative'>
                <a href='wishlist.html'><img src='images/wish.png'></a>
                <div class='tag tag_wish'>
                  <p class='the_wish_count'>My wishlist</p>
                </div>
                <div class='counterWish'><p></p></div>
              </div>
              </div>

              </div>

          </div>
        </header>`
    );
  }

}

export default Header;
