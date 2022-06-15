import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostService'
import { PostType } from '../types/PostType';
import PostItem from './PostItem'

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()


    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as PostType)
    }

    const handleRemove = (post: PostType) => {
        deletePost(post)
    }

    const handleUpdate = (post: PostType) => {
        updatePost(post)
    }

  return (
    <div>
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts?.map(post => 
            <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post ={post}/>
            )}
    </div>
  )
}

export default PostContainer