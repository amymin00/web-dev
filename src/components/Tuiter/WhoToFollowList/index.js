import WhoToFollowListItem from "./ListItem";
import followUsers from "./who";

const WhoToFollowList = () => {
    return (
        <ul className="list-group d-none d-lg-block">
            <li className="list-group-item"><strong>Who to follow</strong></li>
            {followUsers.map(who => <WhoToFollowListItem who={who} />)}
        </ul>
    );
}

export default WhoToFollowList;