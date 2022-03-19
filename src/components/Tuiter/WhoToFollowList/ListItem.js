const WhoToFollowListItem = ({
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return (
        <li className='list-group-item py-1'>
            <div className='row align-items-center p-0'>
                <div className='col-2 p-0 ps-2'>
                    <img src={who.avatarIcon} alt='' className='w-80 rounded-circle' />
                </div>
                <div className='col d-flex justify-content-between'>
                    <div>
                        <div className='row align-items-center'>
                            <p className='w-auto p-0 m-0'><strong>{who.username}</strong></p>
                            <div className='row position-relative align-items-center w-auto mx-1 p-0'>
                                <i className='fa fa-circle w-auto position-absolute p-0'></i>
                                <i className='fa fa-check w-auto p-0 text-white position-absolute'
                                style={{fontSize: '.55em', marginLeft: '.25em'}}></i>
                            </div>
                        </div>
                        <div className='row'>
                            <p className='p-0 m-0'>@{who.handle}</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary rounded-pill shadow-none w-auto'>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;