const PostSummaryItem = post => {
    return (
        `<div class="list-group-item">
            <div class="row">
                <div class="col">
                    ${post.topic && `<p class="text-secondary m-0">${post.topic}</p>`}
                    <div class="row align-items-center p-0 m-0">
                        <p class="w-auto p-0 m-0"><strong>${post.username}</strong></p>
                        <div class="row position-relative align-items-center w-auto mx-2 p-0">
                            <i class="fa fa-circle w-auto position-absolute p-0"></i>
                            <i class="fa fa-check w-auto p-0 text-white position-absolute"
                            style="font-size: .55em; margin-left: .25em;"></i>
                        </div>
                        <p class="text-secondary w-auto m-0"> - ${post.time}</p>
                    </div>
                    ${post.title && `<p class="p-0 m-0"><strong>${post.title}</strong></p>`}
                </div>
                <div class="col-2">
                    <img src=${post.image} class="w-100 rounded-img">
                </div>
            </div>
        </div>`
    );
}

export default PostSummaryItem;