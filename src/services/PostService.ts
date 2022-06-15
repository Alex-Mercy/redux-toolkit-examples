import { build } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { PostType } from "../types/PostType";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<PostType[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<PostType, PostType>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<PostType, PostType>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<PostType, PostType>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    })
})


