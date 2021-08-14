import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserListInit } from '../redux/actions/user';
import styles from './App.module.scss'

export default function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.items);

  useEffect(() => {
    dispatch(getUserListInit());
  }, [])

  return (
    <div className={styles.AppWrapper}>
      Hello boilerplate !
      {users.map(i => {
        return (
          <div key={i._id}>{i.name} - {i.email}</div>
        );
      })}
    </div>
  )
}
