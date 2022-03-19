import PostSummaryItem from "./PostSummaryItem";
import posts from "./post";

const PostSummaryList = () => {
    return (
        <div className="list-group">
            {posts.map(post => <PostSummaryItem post={post} />)}
        </div>
    );
}

export default PostSummaryList;