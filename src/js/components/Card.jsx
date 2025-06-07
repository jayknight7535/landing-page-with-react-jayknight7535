const Card = ({cardtitle="cupcake", url="https://belleofthekitchen.com/wp-content/uploads/2015/11/hot-chocolate-cupcakes-marshmallow-buttercream2-300x436.jpg"}) => {
    return( <div className="card">
   <img src={url} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{cardtitle}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    </div>
  <div className="card-footer text-body-secondary"><button type="button" class="btn btn-primary">Primary</button></div>
</div>)
}
export default Card