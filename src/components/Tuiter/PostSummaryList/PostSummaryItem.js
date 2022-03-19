const PostSummaryItem = ({
    post = {
        'topic': 'Web Development',
        'username': 'ReactJS',
        'time': '2h',
        'image': '/tuiter/assets/reactjslogo.png',
        'title': 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
    }
}) => {
    return (
        <div className='list-group-item'>
            <div className='row'>
                <div className='col'>
                    {post.topic && <p className='text-secondary m-0'>{post.topic}</p>}
                    <div className='row align-items-center p-0 m-0'>
                        <p className='w-auto p-0 m-0'><strong>{post.username}</strong></p>
                        <div className='row position-relative align-items-center w-auto mx-2 p-0'>
                            <i className='fa fa-circle w-auto position-absolute p-0'></i>
                            <i className='fa fa-check w-auto p-0 text-white position-absolute'
                            style={{fontSize: '.55em', marginLeft: '.25em'}}></i>
                        </div>
                        <p className='text-secondary w-auto m-0'> - {post.time}</p>
                    </div>
                    {post.title && <p className='p-0 m-0'><strong>{post.title}</strong></p>}
                </div>
                <div className='col-2'>
                    <img src={post.image} alt='' className='w-100 rounded-img' />
                </div>
            </div>
        </div>
    );
}

export default PostSummaryItem;