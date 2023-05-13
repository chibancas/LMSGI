import { getFirestore } from 'firebase/firestore';
import React from 'react'
import { Outlet } from 'react-router-dom'
import { FirestoreProvider, useFirebaseApp } from 'reactfire';

export const Main = () => {
  return (
    <main>
      <Outlet/>
    </main>
  )
}
