import { FaSearch } from "react-icons/fa";
import "./searchbar.css"
const searchBar = ({ onChange, placeholder }) => {
    return (
        <div className="Search">
            <span className="SearchSpan">
                <FaSearch />
            </span>
            <input
                className="SearchInput"
                type="text"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}
export default searchBar;