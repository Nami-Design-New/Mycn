export default function PackageCard({ data }) {
  return (
    <div className="package-card">
      <img src={data?.image} alt="Package" className="package-image" />
      <div className="text-content">
        <h6>{data?.description}</h6>
        {data?.price && (
          <p>Price: <strong>{data?.price}$</strong></p>
        )}
      </div>
    </div>
  );
}
