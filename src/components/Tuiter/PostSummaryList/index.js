import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = () => {
    return (
        <div className="list-group">
            {posts.map(post => <PostSummaryItem post={post} />)}
        </div>
    );
}

export default PostSummaryList;