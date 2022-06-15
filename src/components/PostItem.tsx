import React, { FC } from 'react'
import { PostType } from '../types/PostType'

type PostItemProps = {
    post: PostType;
    remove: (post: PostType) => void;
    update: (post: PostType) => void;
}



const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  }

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({...post, title})
  }

  

  return (
    <div onClick={handleUpdate} >
        {post.id}. {post.title}
        <button onClick={handleRemove} >Delete</button>
    </div>
  )
}

export default PostItem