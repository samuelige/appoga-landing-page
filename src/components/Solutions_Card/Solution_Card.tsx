import "./Solution_Card.scss"

interface SolutionCardProps {
    img: string;
    title: string;
}
const SolutionCard = ({img, title} : SolutionCardProps) => {
  return (
    <div className='solution_card'>
        <img src={img} alt={img} />
        <div className="card_footer">
            <h5>{title}</h5>
        </div>
    </div>
  )
}

export default SolutionCard