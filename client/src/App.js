import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  useMemo,
  useRef,
} from "react";
import _ from "lodash";
import moment from "moment";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [pageCount, setPageCount] = useState(0);
  const [data, setData] = useState([]);
  const fetchIdRef = useRef(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchAPIData = async ({ limit, skip, search }) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/companies?limit=${limit}&skip=${skip}&search=${search}`
      );
      const data = await response.json();

      setData(data.data);

      setPageCount(data.paging.pages);
      setLoading(false);
    } catch (e) {
      console.log("Error while fetching", e);
      // setLoading(false)
    }
  };

  const fetchData = useCallback(
    ({ pageSize, pageIndex }) => {
      // console.log("fetchData is being called")
      // This will get called when the table needs new data
      // You could fetch your data from literally anywhere,
      // even a server. But for this example, we'll just fake it.
      // Give this fetch an ID
      const fetchId = ++fetchIdRef.current;
      setLoading(true);
      if (fetchId === fetchIdRef.current) {
        fetchAPIData({
          limit: pageSize,
          skip: pageSize * pageIndex,
          search: searchTerm,
        });
      }
    },
    [searchTerm]
  );

  const _handleSearch = _.debounce(
    (search) => {
      setSearchTerm(search);
    },
    1500,
    {
      maxWait: 1500,
    }
  );

  const columns = useMemo(() => [
    { Header: "Price", accessor: "price", show: true },
    { Header: "Shares", accessor: "shares", show: true },
    { Header: "Ticker", accessor: "ticker", show: true },
    { Header: "Ticket", accessor: "ticket", show: true },
    {
      Header: "Time",
      accessor: "time",
      Cell: (cellInfo) => {
        return (
          <Fragment>
            {moment(cellInfo.row.original.time).format("Do MMM YYYY")}
          </Fragment>
        );
      },
      show: true,
    },
  ]);

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mt-3">
        <input
          id="searchTerm"
          name="searchTerm"
          type="text"
          onChange={(e) => _handleSearch(e.target.value)}
          placeholder="Search By Ticket"
          className="appearance-none block w-1/4 float-right px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="flex justify-center mt-8">
        <Table
          pageCount={pageCount}
          fetchData={fetchData}
          columns={columns}
          loading={loading}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
