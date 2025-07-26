import { useCallback } from '@lynx-js/react';
import { useNavigate } from 'react-router';

interface ButtonProps {
    destination?: string
    text?: React.ReactNode
}

export default function NavButton({destination, text}: ButtonProps) {
    const nav = useNavigate();
    const navigatePage = useCallback(() => {    
        console.info('Navigating to routed page');
        nav('/' + destination);
      }, [nav, destination]);

    return (
        <view bindtap={navigatePage}>
            <text className="NavButton">{text}</text>
        </view>
    )
}