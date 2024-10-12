import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [products, setProducts] = useState([
    { id: 0, name: 'Casual T-Shirt', company: 'Allen Solly', price: 279, originalPrice: 999, discount: '72% off', description: 'Men Regular Fit Casual Shirt', topOffer: 'Top Discount', color: 'danger', image: 'https://pictures.kartmax.in/live/sites/9s145MyZrWdIAwpU0JYS/product-images/allen_solly_plain_black_cotton_polo_t_shirt_1717071627askwnrgft58578_1.jpg', cart: false },
    { id: 1, name: 'Formal Shirt', company: 'Raymond', price: 549, originalPrice: 1299, discount: '58% off', description: 'Men Slim Fit Formal Shirt', topOffer: 'Limited Time Offer', color: 'dark', image: 'https://www.dorrcee.com/cdn/shop/files/DC00S23101.f.jpg?v=1708344944&width=800' },
    { id: 2, name: 'Slim Fit Chinos', company: 'Peter England', price: 999, originalPrice: 1499, discount: '33% off', description: 'Trendy Fit Chinos', topOffer: 'Exclusive Offer', color: 'warning', image: 'https://assets.ajio.com/medias/sys_master/root/20240809/FgSY/66b621d56f60443f31fc48f1/-473Wx593H-442415317-navy-MODEL.jpg', cart: false },
    { id: 3, name: 'Leather Jacket', company: 'Zara', price: 3999, originalPrice: 4999, discount: '20% off', description: 'Premium Leather Jacket', topOffer: 'Winter Special Offer', color: 'info', image: 'https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/309935/zara-leather-jacket-309935-1696860687430-main-320-80.jpg', cart: false },
    { id: 4, name: 'Denim Jeans', company: 'Levis', price: 1999, originalPrice: 2599, discount: '23% off', description: 'Men Slim Fit Denim Jeans', topOffer: 'Best Seller', color: 'success', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/t/h/1/32-18298-1268-levi-s-original-imaget8jrfzwqhrw-bb.jpeg?q=90&crop=false', cart: false },
    { id: 5, name: 'Sporty Sneakers', company: 'Nike', price: 3999, originalPrice: 5999, discount: '33% off', description: 'Men Sports Sneakers', topOffer: 'Flash Sale', color: 'primary', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b14aba9a-f828-45d3-9607-b687b884aa7d/NIKE+REVOLUTION+7+EASYON.png', cart: false },
    { id: 6, name: 'Classic Blue Suit', company: 'H&M', price: 8999, originalPrice: 10999, discount: '18% off', description: 'Elegant Men Suit', topOffer: 'Luxury Offer', color: 'light', image: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0c%2Fee%2F0ceeafa428ceaab04db6f3cacfb9c3a88ff25a7c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D', cart: false },
    { id: 7, name: 'Casual Shorts', company: 'Puma', price: 1299, originalPrice: 1999, discount: '35% off', description: 'Comfortable Casual Shorts', topOffer: 'Seasonal Sale', color: 'secondary', image: 'https://img.tatacliq.com/images/i8/437Wx649H/MP000000013184765_437Wx649H_202205200418521.jpeg', cart: false }
  ])

  const [cart, setCart] = useState([]);
  const [isCartHovered, setIsCartHovered] = useState(false)

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: productId, quantity: 1 }];
    });
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, cart: !product.cart } : product
      )
    );
  };

  const updateQuantity = (productId, change) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (!existingItem && change > 0) {
        return [...prevCart, { id: productId, quantity: 1 }];
      }
      const newCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      );
      return newCart.filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, cart: !product.cart } : product
      )
    );
  }

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0)

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.id)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  }



  return (
    <div className='container w-100'>

      {/* navbar */}

      <nav style={{ height: "80px" }} class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <img src="https://thumbs.dreamstime.com/b/letter-s-logo-shape-shopping-bag-suitable-businesses-companies-292699623.jpg" width="40" height="40" class="d-inline-block align-top ms-3" alt="" />
          <a class="navbar-brand ms-2 fw-bolder fs-4" href="#">Shopzy</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item fw-bold ms-5">
                <a class="nav-link active" aria-current="page">Home</a>
              </li>
              <li class="nav-item fw-bold ms-5">
                <a class="nav-link " href="#">Products</a>
              </li>
              <li class="nav-item fw-bold ms-5">
                <a class="nav-link fw-bold " href="#">About Us</a>
              </li>
              <li class="nav-item fw-bold ms-5 me-5">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn fw-bold btn-outline-dark" type="button"><i class="fa-solid fa-search"></i></button>
              <button type="button" className="btn fw-bold btn-outline-dark position-relative ms-3"><i class="fa-solid fa-cart-shopping" onClick={(() => setIsCartHovered(!isCartHovered))}></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{getTotalItems()}</span></button>
            </form>
          </div>
        </div>
      </nav>

      {/* hovered div */}

      {isCartHovered && (
        <div className="dropdown-menu show" style={{ right: "0", width: "400px" }}>
          <div className="p-3">
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='fw-bolder'>My Cart</h5>
              {cart.length > 0 && <button className='btn fw-bolder btn-outline-dark btn-sm' onClick={() => { setCart([]) }}><i className="fa-solid fa-trash"></i> Delete All</button>}
            </div>
            <div className='d-flex'>
              <p className="small fw-bold text-dark">
                Cart Total: ${getTotalPrice().toFixed(2)}
              </p>
              <p className="small fw-bold text-muted ms-2">
                Total Items: {getTotalItems()}
              </p>
            </div>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => {
              const product = products.find((p) => p.id === item.id);
              if (!product) return null;
              return (
                <div key={item.id} className="d-flex justify-content-between align-items-center p-2">
                  <div className="d-flex align-items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <p className="small fw-bolder text-dark">{product.name}</p>
                    <p className="small fw-bold text-muted">
                      {product.price} x {item.quantity} = {(product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    {item.quantity > 1 && <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="btn fw-bolder btn-outline-dark btn-sm"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>}
                    <span className="mx-2 fw-bolder">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="btn fw-bolder btn-outline-dark btn-sm"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn fw-bolder btn-outline-danger btn-sm ms-2"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-3 text-center text-muted mb-5 fw-bold">
              <p><i className="fa-solid fa-bell"></i> Your Cart is Empty !</p>
            </div>
          )}
        </div>
      )}
      <div className="container mt-4 mb-5">

        {/*image grid  */}

        <div className="row">
          <div className="col-md-9">
            <div className="mainpic p-3 position-relative" style={{ height: "500px", borderRadius: "25px" }}>
              <div className="position-absolute bottom-0 start-0">
                <h2 className="display-4 fw-bold">SHOPZY MEN</h2>
                <h2 className="display-4 fw-bold">ELEVATE YOUR STYLE</h2>
                <h2 className="display-5 fw-bold">DISCOVER PREMIUM FASHION.</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row border bg-light position-relative mb-4" style={{ height: "320px", borderRadius: "25px" }}>
              <div className="mediumpic position-absolute text-center">
              </div>
            </div>
            <div className="row border bg-light position-relative bg-light" style={{ height: "150px", borderRadius: "25px" }}>
              <div className="smallpic position-absolute text-start">
                <span className='fw-bold' style={{ fontSize: "45px" }}>50000+</span>
                <h4 className='fw-bold'>Exclusive</h4>
                <h4 className='fw-bold'>Products</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='text-start mb-4'>
          <h1 className='fw-bold'>OUR BEST SELLERS</h1>
        </div>

        {/* products view */}
        
        <div className='scroll d-flex flex-wrap justify-content-center'>
          {products.map((item) => (
            <div className="card rounded me-3 mb-3" style={{ width: "18rem" }} key={item.id}>
              <img
                src={item.image}
                className="card-img-top"
                alt="..."
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <div className='d-flex justify-content-between align-items-center'>
                  <span className='fw-bold' style={{ fontSize: "12px", color: "grey" }}>{item.company}</span>
                  <span className={`badge text-bg-${item.color}`} style={{ fontSize: "12px" }}>{item.topOffer}</span>
                </div>
                <h5 className='mt-2'>{item.name}</h5>
                <p>{item.description}</p>
                <span className='fw-bolder' style={{ fontSize: "20px" }}>₹{item.price}</span>
                <span className='fw-bold ms-2' style={{ fontSize: "15px", color: "grey", textDecoration: "line-through" }}>₹{item.originalPrice}</span>
                <span className='fw-bold ms-2' style={{ fontSize: "15px", color: "green" }}>₹{item.discount}</span><br />
                <div className='text-center mt-3'>
                  <button className="btn fw-bold btn-outline-dark" type="button" style={{ width: "200px" }} onClick={() => { !item.cart ? addToCart(item.id) : removeFromCart(item.id) }}>
                    {!item.cart ? "Add to Cart" : "Remove from Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* footer */}

        <footer className="footer mt-5">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-section">
                <h4>ABOUT</h4>
                <ul>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/careers">Careers</a></li>
                  <li><a href="/stories">Shopzy Stories</a></li>
                  <li><a href="/press">Press</a></li>
                  <li><a href="/corporate">Corporate Information</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>GROUP COMPANIES</h4>
                <ul>
                  <li><a href="/myntra">Myntra</a></li>
                  <li><a href="/cleartrip">Cleartrip</a></li>
                  <li><a href="/shopzy">Shopzy</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Mail Us:</h4>
                <p>Shopzy Internet Pvt. Ltd.</p>
                <p>1234, Main Road, Tech Village,</p>
                <p>Bangalore, 560103, India</p>
              </div>
              <div className="footer-section">
                <h4>Registered Office Address:</h4>
                <p>Shopzy Internet Pvt. Ltd.</p>
                <p>Buildings XYZ, Tech Village,</p>
                <p>Outer Ring Road, Bangalore, 560103, India</p>
                <p>CIN: U51109KA2012PTC123456</p>
                <p>Telephone: +91 12345 67890</p>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-links">
                <a href="/seller" className="footer-icon">Become a Seller</a>
                <a href="/advertise" className="footer-icon">Advertise</a>
                <a href="/giftcards" className="footer-icon">Gift Cards</a>
                <a href="/help" className="footer-icon">Help Center</a>
              </div>
              <div className="footer-copyright">
                <p>&copy; 2024-Shopzy.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App;
