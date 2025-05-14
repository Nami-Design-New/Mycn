export default function MyTransactions() {
  const initialData = [
    {
      id: 1,
      date: "2022-10-24",
      amount: "$100",
      description: "Order #123",
      status: "Pending",
    },
    {
      id: 2,
      date: "2022-10-24",
      amount: "$100",
      description: "Order #123",
      status: "Pending",
    },
    {
      id: 3,
      date: "2022-10-24",
      amount: "$100",
      description: "Order #123",
      status: "Pending",
    },
    {
      id: 4,
      date: "2022-10-24",
      amount: "$100",
      description: "Order #123",
      status: "Pending",
    },
    {
      id: 5,
      date: "2022-10-24",
      amount: "$100",
      description: "Order #123",
      status: "Pending",
    },
  ];
  return (
    <div className="transactions_history">
      <div className="row">
        <div className="col-12 p-2">
          <h3 className="sec_title">My Transactions</h3>
          <p className="sec_desc">View and manage your transactions history</p>
        </div>

        <div className="col-12 p-2 mt-2">
          <div className="table_container">
            <table>
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {initialData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
