// import Item from '../../components/Item/Item';
import ItemCaracteristicas from '../Item/ItemCaracteristicas';

const ItemDetail = ({data}) => {

    return (

        <>

        {
            
            data.map (item => (
            <ItemCaracteristicas
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price} 
                stock = {item.stock} 
                categoryId={item.categoryId}
                />
            ))
        }

        </>

    );
}

export default ItemDetail;