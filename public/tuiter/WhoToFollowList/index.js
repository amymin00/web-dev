import WhoToFollowListItem from "./ListItem.js";
import followUsers from "./who.js";

const WhoToFollowList = () => {
    return (
        `<ul class="list-group d-none d-lg-block">
        <li class="list-group-item"><strong>Who to follow</strong></li>
            ${followUsers.map(who => WhoToFollowListItem(who)).join('')}
        </ul>`
    );
}

export default WhoToFollowList;