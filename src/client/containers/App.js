import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styles from './App.module.scss'
import Gallery from './Gallery/Gallery';
import Home from './Home/Home';
import Header from '../components/Header/Header';
import PhotoUploader from '../components/PhotoUploader/PhotoUploader';
import DetailedPhoto from './DetailedPhoto/DetailedPhoto';

export default function App() {
  return (
    <Router>
      <div className={styles.AppWrapper}>
        <Header />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Gallery} path="/gallery" />
          <Route exact component={PhotoUploader} path="/photo_uploader" />
          <Route exact component={DetailedPhoto} path="/photo/:photoId" />
        </Switch>
      </div>
    </Router>
  )
}
