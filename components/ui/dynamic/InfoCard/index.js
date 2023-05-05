
const infoCard = ({title, data}) => {
  return (
    <div className="info-card">
        <div className="info-card-top">{title}</div>
        <div className="info-card-bottom">{data}</div>
    </div>
  )
}
export default infoCard
