import WhoToFollowListItem from "./ListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        <div>
            {who.map(w => <WhoToFollowListItem who={w} />)}
        </div>
    );
}

export default WhoToFollowList;