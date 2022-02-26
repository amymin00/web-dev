const WhoToFollowListItem = who => {
    return (
        `<li class="list-group-item py-1">
            <div class="row align-items-center p-0">
                <div class="col-2 p-0 ps-2">
                    <img src=${who.avatarIcon} class="w-80 rounded-circle">
                </div>
                <div class="col d-flex justify-content-between">
                    <div>
                        <div class="row align-items-center">
                            <p class="w-auto p-0 m-0"><strong>${who.username}</strong></p>
                            <div class="row position-relative align-items-center w-auto mx-1 p-0">
                                <i class="fa fa-circle w-auto position-absolute p-0"></i>
                                <i class="fa fa-check w-auto p-0 text-white position-absolute"
                                style="font-size: .55em; margin-left: .25em;"></i>
                            </div>
                        </div>
                        <div class="row">
                            <p class="p-0 m-0">@${who.handle}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-primary rounded-pill shadow-none w-auto">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </li>`
    );
}

export default WhoToFollowListItem;