import { getFirestore } from 'firebase/firestore';
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <Outlet />
  )
}
