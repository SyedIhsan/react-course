import axios from 'axios'
import { useState, useEffect } from 'react'
import CheckoutHeader from './CheckoutHeader'
import OrderSummary from './OrderSummary'
import PaymentSummary from './PaymentSummary'
import './CheckoutPage.css'

function CheckoutPage({ cart, loadCart }) {
	const [deliveryOptions, setDeliveryOptions] = useState([]);
	const [paymentSummary, setPaymentSummary] = useState(null);

	useEffect(() => {
		const getCheckoutData = async () => {
			const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
			setDeliveryOptions(response.data);
		};

		getCheckoutData();
	}, []);

	useEffect(() => {
		const getPaymentData = async () => {
			const response = await axios.get('/api/payment-summary');
			setPaymentSummary(response.data);
		};

		getPaymentData();
	}, [cart]);

	return (
		<>
			<link rel="icon" type="image/svg+xml" href="https://supersimple.dev/images/cart-favicon.png" />
			<title>Checkout</title>

			<CheckoutHeader />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
					<OrderSummary
						deliveryOptions={deliveryOptions}
						cart={cart}
						loadCart={loadCart}
					/>

					<PaymentSummary
						paymentSummary={paymentSummary}
						loadCart={loadCart}
					/>
				</div>
			</div>
		</>
	);
}

export default CheckoutPage