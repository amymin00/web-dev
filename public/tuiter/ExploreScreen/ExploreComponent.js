import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
    return(`
        <div class="col-10 col-lg-7 col-xl-6">
            <div class="d-flex justify-content-between mb-2">
                <div class="input-group align-items-center rounded-pill border border-0 py-1 px-2 bg-white">
                    <i class="fa fa-search mx-2"></i>
                    <input type="search" class="form-control shadow-none p-0 ms-1 border-0" placeholder="Search Tuiter" aria-label="Search" />
                </div>
                <i class="fa fa-gear fa-2x text-primary ms-3"></i>
            </div>
            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="card position-relative mb-2">
                <img src="../assets/spacexstarship.jpg" alt="">
                <h3 class="position-absolute start-0 bottom-0 text-white ms-2"><strong>SpaceX's Starship</strong></h3>
            </div>
           ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;