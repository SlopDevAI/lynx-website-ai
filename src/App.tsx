import { useCallback, useEffect, useState } from '@lynx-js/react';
import { NavButton } from './components/index.js';

import './App.css';
import arrow from './assets/arrow.png';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';

export function homePage() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Hello');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo((alterLogo) => {
      const timeoutAlterLogo = !alterLogo;
      if (!alterLogo) {
        setTimeout(() => {
          setAlterLogo((alterLogo) => !alterLogo);
        }, 4000);
      }
      return timeoutAlterLogo;
    });
  }, []);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={arrow} className="Logo--rocket" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <text className="Title">React</text>
          <text className="Subtitle">on Lynx</text>
        </view>
        <view className="Content">
          <image src={reactLynxLogo} className="Arrow" />
          <text className="Description">Tap the logo and have fun!</text>
          <text className="Hint">
            Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
            to see updates!
          </text>
        </view>
        <view>
          <NavButton destination="routed" text="Navigate to routed page" />
        </view>
        <view style={{ flex: 1 }} />
      </view>
    </view>
  );
}

export default homePage;