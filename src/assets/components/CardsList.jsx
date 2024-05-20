import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardsList( { dataCards, textAlign, gutterBetweenCards, col, cardStyle, buttonStyle, buttonText } ) {
    
    // RENDER
    return (
        <div className={ 'container ' + textAlign }>
            <div className={ 'row ' + gutterBetweenCards }>

                {dataCards.map(
                    (dataCard) => {
                        return (

                            <div className={ 'card-group d-flex justify-content-center ' + col }>
                                <Card key={dataCard.id} className={ 'border border-secondary ' + cardStyle + ' ' + ( !!(dataCard.imageURL)===false && 'pt-5' ) + ' ' + ( !!(dataCard.infoPlus)===false && 'pb-5' ) }>
                                    { !!(dataCard.imageURL) && <Card.Img variant='top' src={process.env.PUBLIC_URL + dataCard.imageURL } alt={dataCard.alt} />}
                                    <Card.Body>
                                        { !!(dataCard.icon) && <p className='iconCard iconColor text-primary'>{dataCard.icon}</p>}
                                        <Card.Title className='text-uppercase'>{dataCard.title}</Card.Title>
                                        <Card.Text className=''>
                                        {dataCard.content}
                                        </Card.Text>
                                        { !!(dataCard.buttonLink) && <Card.Link href={dataCard.buttonLink}><Button className={buttonStyle}>{buttonText}</Button></Card.Link>}
                                    </Card.Body>
                                    {!!(dataCard.infoPlus) && <p className='m-0 py-2 bg-darker border-top border-secondary rounded-bottom '>{dataCard.infoPlus}</p>}
                                </Card> 
                            </div>
                            
                        )
                    }
                )}

            </div>
        </div>
    );
  }
