import Item from './Item';
import '../animations.css'; // asegurate de tener este archivo en src/

const ItemList = ({ items }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 fade-in card-hover">
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
