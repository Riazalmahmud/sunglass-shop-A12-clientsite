import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import CollectionCategory from '../CollectionCatagory/CollectionCategory';

const CollectionCategoris = () => {
    const [collections, setCollection] = useState([])

    useEffect(() => {
        fetch('https://hidden-mesa-07077.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCollection(data))
    }, [])
    return (
        <div>


            <Row xs={1} md={3} className="g-4">

                {
                    collections !== undefined &&
                    collections.slice(0, 3).map(collection =>
                        <CollectionCategory
                            key={collection.id}
                            collection={collection}

                        ></CollectionCategory>)
                }


            </Row>

        </div>
    );
};

export default CollectionCategoris;