import "./ImageTitleCard.scss"

interface ImageTitleCardProps {
    img: string;
    title: string;
}
const ImageTitleCard = ({img, title} : ImageTitleCardProps) => {
  return (
    <div className='solution_card'>
        <img src={img} alt={img} />
        <div className="card_footer">
            <h5>{title}</h5>
        </div>
    </div>
  )
}

export default ImageTitleCard