

export default function ReviewCard(props) {


    const review = props.props

    return (
        <>

            <div>
                <p>Recensione : {review.text}</p>
                <p>Voto : {review.vote}</p>
                <p>Di : {review.name}</p>
            </div>






        </>
    )
}
