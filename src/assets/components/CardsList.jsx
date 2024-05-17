import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardsList( { dataCards, containerClass, gutterBetweenCards, col, buttonStyle, buttonText } ) {
    
    // RENDER
    return (
        <div className={containerClass}>
            <div className={'row '+gutterBetweenCards}>
            {dataCards.map(
            (dataCard) => {
                return (
                <div className='card-group d-flex justify-content-center text-center'>
                    <Card key={dataCard.id} className={'cardShadow mh-75 '+ col + (!(dataCard.icon) && !(dataCard.imageURL) && ' pt-5') + (!(dataCard.infoPlus) && ' pb-5')}>
                        {!!(dataCard.imageURL) && <Card.Img variant="top" src={process.env.PUBLIC_URL + dataCard.imageURL } />}
                        <Card.Body>
                            {!!(dataCard.icon) && <p className='iconCard iconColor text-primary pt-5'>{dataCard.icon}</p> }
                            <Card.Title className='text-uppercase mt-2'>{dataCard.title}</Card.Title>
                            <Card.Text className='mt-3'>
                            {dataCard.content}
                            </Card.Text>
                            {!!(dataCard.buttonLink) && <Card.Link href={dataCard.buttonLink}><Button className={buttonStyle}>{buttonText}</Button></Card.Link>}
                        </Card.Body>
                        {!!(dataCard.infoPlus) && <p className='m-0 py-2 bg-gray-body border'>{dataCard.infoPlus}</p>}
                    </Card> 
                </div>
                )
            }
            )}
            </div>
        </div>
    );
  }
