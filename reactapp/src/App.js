import React from 'react';
import './index';
import UrlValidator from './components/UrlValidator/UrlValidator';

function MyPage() {
  return (
    <div style={{textalign:"center"}}>
      <h1 >Url Validator</h1>
      <UrlValidator />
    </div>
  );
}

export default MyPage;
