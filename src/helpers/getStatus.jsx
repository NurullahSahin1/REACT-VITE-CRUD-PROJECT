const getStatus = (status) => {
  switch (status) {
    case "Important":
      return <span className="badge bg-danger">Önemli</span>;
    case "Job":
      return <span className="badge bg-warning">İş</span>;
    case "Daily":
      return <span className="badge bg-primary">Günlük</span>;

    default:
      return <span className="badge bg-secondary">Varsayılan</span>;
  }
};
export default getStatus;
