import { useCallback, useEffect, useState } from '@lynx-js/react';
import { NavButton } from '../../components/index.js';

import '../../App.css';
import arrow from '../../assets/arrow.png';

export function routedPage() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Hi');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={arrow} className="Logo--react" />
            ) : (
              <image src={arrow} className="Logo--lynx" />
            )}
          </view>
          <text className="Title">Routed React Page</text>
          <text className="Subtitle">on Lynx :3</text>
        </view>
        <view className="Content" >
          <NavButton destination="" text="Navigate to home page" />
        </view>
        <view style={{ flex: 1 }} />
      </view>
    </view>
  );
}
