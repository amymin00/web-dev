import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = () => {
    return (
        `<div class="list-group">
            ${posts.map(post => PostSummaryItem(post)).join('')}
        </div>`
    );
}

export default PostSummaryList;