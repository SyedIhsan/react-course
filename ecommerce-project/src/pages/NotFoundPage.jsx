import Header from "../components/Header"
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <>
      <Header />

      <div className="page-container">
        <h1>404</h1>
        <h4>Page not found</h4>
        <h5>Please try again later.</h5>
      </div>
    </>
  )
}

export default NotFoundPage