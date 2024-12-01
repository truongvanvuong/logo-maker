import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = ({ downloadIcon }) => {
    return (
        <div className="p-4 shadow-sm border flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-12 h-12" />
                <h4>Logo</h4>
            </div>
            <Button className="flex gap-2 items-center" onClick={() => downloadIcon(Date.now())}>
                <Download className="h-4 w-4" /> Tải xuống
            </Button>
        </div>
    );
};

export default Header;
