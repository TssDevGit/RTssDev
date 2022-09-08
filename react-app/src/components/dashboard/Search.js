export default function SearchComponent() {
    return (
        <div className="">
            <div className="">
            <select id="exampleSelect" name="select" className="form-select-sm">
                <option>案件ID</option>
                <option>案件名</option>
            </select>
            <input  type="text" className=""  placeholder="Search..."  />
            {/* <input id="exampleEmail" type="text" name="search" placeholder="Search...."  className="form-control-sm"></input> */}
            <button className="btn btn btn-secondary btn-sm">
                Search
            </button>
            </div>
        </div>
    );
}