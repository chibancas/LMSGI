import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JjfMain } from './structura/Main/JjffMain';
import { JjfHeader } from './structura/Header/JjfHeader';
import { Route, Routes } from 'react-router-dom';
import { Jjfint } from './pages/Jjfint/Jjfint';
import { Jjfauto } from './pages/Jjfauto/Jjfauto';
import { Jjanfi } from './pages/Jjanfi/Jjanfi';
import { Jjffast } from './pages/Jjffast/Jjffast';
import { Jjfperf } from './pages/Jjfperf/Jjfperf';
import { Jjfmil } from './pages/Jjfmil/Jjfmil';


export const App = () => {
  return (
    <>
      <JjfHeader/>
      <JjfMain/>
      <Routes>
      <Route path='/' element={<Jjfauto/>}/>
        <Route path='int' element={<Jjfint/>}/>
        <Route path='anfi' element={<Jjanfi/>}/>
        <Route path='fast' element={<Jjffast/>}/>
        <Route path='perf' element={<Jjfperf/>}/>
        <Route path='mil' element={<Jjfmil/>}/>
      </Routes>
    </>
  )
}