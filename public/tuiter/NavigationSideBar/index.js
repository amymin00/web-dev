const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <i class="fa fa-twitter list-group-item"></i>
                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-xl-inline">Home</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-xl-inline">Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-xl-inline">Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-xl-inline">Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-xl-inline">Lists</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-xl-inline">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex">
                    <!-- <span class="fa-stack p-0"> need to remove a-link padding
                        <i class="fa fa-circle fa-stack-1x m-0 p-0"></i>
                        <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse" style="font-size: .55em;"></i>
                    </span>                 -->
                    <div class="position-relative align-items-center start-0 w-auto">
                        <i class="fa fa-circle w-auto"></i>
                        <i class="fa fa-ellipsis-h w-auto p-0 text-black position-absolute"
                        style="font-size: .55em;  margin-left: -1.15em; margin-top: 1em;"></i>
                    </div>
                    <span class="d-none d-xl-inline ms-1">More</span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}

export default NavigationSidebar;
