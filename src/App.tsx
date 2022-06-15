import React, { useEffect } from 'react'
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice'

const App = () => {
  // const dispatch = useAppDispatch();
  // const { error, isLoading, users } = useAppSelector(state => state.userReducer)
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div style={{display: 'flex'}}>
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer/>
      <PostContainer2/>
    </div>
  )
}

export default App