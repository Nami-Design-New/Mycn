export default function MyAddresses() {
  const initialAddresses = [
    {
      id: 1,
      firstName: "Ahmed",
      lastName: "Elsayed",
      phone: "123-456-7890",
      addressLine1: "123 Main St, Anytown, USA",
      addressLine2: "Apt 4B",
      city: "New York",
      country: "Saudi Arabia",
      nickName: "Home Address",
    },
  ];
  return (
    <div className="my_addresses">
      <div className="row">
        <div className="col-12 p-2 d-flex align-items-center justify-content-between">
          <div>
            <h3 className="sec_title">My Addresses</h3>
            <p className="sec_desc">
              Manage your shipping addresses and track your shipments.
            </p>
          </div>
          <button className="add_btn">
            <i className="fa-regular fa-plus"></i> Add New Address
          </button>
        </div>

        {initialAddresses.map((address) => (
          <div className="col-lg-4 col-md-6 col-12 p-2" key={address.id}>
            <div className="address_card">
              <div className="head">
                <h6>{address.nickName}</h6>
                <button className="edit_btn">Edit</button>
              </div>
              <div className="body">
                <p>
                  {address.firstName} {address.lastName}
                </p>
                <p>{address.addressLine1}</p>
                <p>{address.addressLine2}</p>
                <p>
                  {address.city}, {address.country}
                </p>
                <p>{address.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
