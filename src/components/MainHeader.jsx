
import SearchIcon from "@mui/icons-material/Search";

export default function MainHeader({ setNewComponent, setSearchQuery, searchQuery }) {
  
  return (
    <>
      <div className="header_Search">
        <div className="input_SearchIcon">
            <span className="material-symbols-outlined"  >
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder=" Search by name"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          <button onClick={() => setNewComponent(true)}>
            <span>+</span>Add New Component
          </button>
        </div>
      </div>
    </>
  );
}
