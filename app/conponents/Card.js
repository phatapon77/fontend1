export default function Card() {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 text-center mb-4"></div>
            <div className="col-md-12 text-center mb-4">
                <h3>Our Project</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card">
                <img src="https://i.pinimg.com/736x/66/f4/26/66f4261019a0c14085f6d690552e52a4.jpg" className="card-img-top img-responsive" alt="..." />
                <div className="card-body">
                    <p className="card-text">-</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://i.pinimg.com/736x/b7/42/7e/b7427e380121c68821000b876e473aba.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">-</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://media.printler.com/media/photo/122968.jpg?rmode=crop&width=638&height=900" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">-</p>
                </div>
                </div>
            </div>
      </div>
    </div>
    );
  }