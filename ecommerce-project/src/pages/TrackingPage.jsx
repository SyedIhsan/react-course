import axios from 'axios'
import dayjs from 'dayjs'
import { Link, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import './TrackingPage.css'

function TrackingPage({ cart }) {
  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();

  useEffect(() => {
    const getProductData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`)
      setOrder(response.data);
    };

    getProductData();
  }, [orderId]);

  if (!order) return null;

  const orderProduct = order.products.find((product) => {
    return product.productId === productId
  });

  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  let rawProgress = (timePassedMs / totalDeliveryTimeMs) * 100

  const deliveryProgress = Math.min(
    Math.max(rawProgress, 0), 100
  );

  const isPreparing = deliveryProgress < 33
  const isShipped = deliveryProgress >= 33 && deliveryProgress < 100
  const isDelivered = deliveryProgress >= 100

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="https://supersimple.dev/images/tracking-favicon.png" />
      <title>Tracking</title>

      <Header cart={cart} />

      <div className="tracking-page">
        {orderProduct && (
          <div key={orderProduct.productId} className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
              View all orders
            </Link>

            <div className="delivery-date">
              {deliveryProgress >= 100 
                ? "Delivered on " 
                : "Arriving on "
              } 
              {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

            <div className="product-info">
              {orderProduct.product.name}
            </div>

            <div className="product-info">
              Quantity: {orderProduct.quantity}
            </div>

            <img className="product-image" src={orderProduct.product.image} />

            <div className="progress-labels-container">
              <div className={`progress-label ${isPreparing && "current-status"}`}>
                Preparing
              </div>
              <div className={`progress-label ${isShipped && "current-status"}`}>
                Shipped
              </div>
              <div className={`progress-label ${isDelivered && "current-status"}`}>
                Delivered
              </div>
            </div>

            <div className="progress-bar-container">
              <div className="progress-bar" style={{width: `${deliveryProgress}%`}}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TrackingPage