import React from 'react'

const Posts = ({posts}) => (
    <div>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
)

export default Posts