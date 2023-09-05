
import Books from "../../../Model/Books";
export const BooksCards:React.FC<{dataBooks: Books[]}> = (props) => {

    return (
        <>
            <div className="row g-4">
                {props.dataBooks.map((single) => {
                    return (
                        <div className="col-md-4 mb-4" key={single.id}>
                            <div className="card p-4 bg-light">
                                <img width='100' height='400' src={single.img} className="card-img-top" alt={single.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{single.title}</h5>
                                    <p className="card-text">{single.description}</p>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>


        </>
    );
}