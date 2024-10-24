import { PropagateLoader } from "react-spinners"
import "./loading.css"

const loading = () => {
  return (
    <div className="loading">
        <PropagateLoader className="spinner"/>
        </div>
  )
}

export default loading