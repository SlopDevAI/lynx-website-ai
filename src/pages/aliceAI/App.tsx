import { useCallback, useEffect, useState } from '@lynx-js/react';

import '../../App.css';

import { useNavigate } from 'react-router';
// import { fetchAliceAPI } from '../../api/App.jsx';

export function homePage() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Info');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  const nav = useNavigate();

  const navigateToHomePage = useCallback(() => {
    console.info('Navigating to routed page');
    nav('/');
  }, [nav]);

  // fetchAliceAPI();

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Content">
          <text>This is an incomplete page, ignore for now.</text>
        </view>
        <view style={{ flex: 1 }} />
      </view>
    </view>
  );
}
