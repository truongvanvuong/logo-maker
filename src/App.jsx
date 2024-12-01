import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import IconController from './components/IconController';
import BackgroundControler from './components/BackgroundControler';
import LogoPreview from './components/LogoPreview';
import UpdateStorageContext from './Context/UpdateStorageContext';
import logo from './assets/logo.png';

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [UpdateStorage, setUpdateStorage] = useState({});
    const [downloadIcon, setDownloadIcon] = useState();
    return (
        <UpdateStorageContext.Provider value={{ UpdateStorage, setUpdateStorage }}>
            <div className="md:hidden h-screen flex flex-col gap-2 items-center justify-center">
                <img src={logo} alt="logo" className="w-16 h-16" />
                <span>Ứng dụng chưa hỗ trên thiết bị di dộng</span>
            </div>
            <div className="hidden md:block">
                <Header downloadIcon={setDownloadIcon} />
                <div className="w-52 fixed">
                    <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
                </div>
                <div className="ml-52 grid grid-cols-1 md:grid-cols-6">
                    <div className="md:col-span-2 border h-[calc(100vh-81px)] shadow-sm p-5 overflow-auto">
                        {selectedIndex === 0 ? <IconController /> : <BackgroundControler />}
                    </div>
                    <div className="md:col-span-4">
                        <LogoPreview downloadIcon={downloadIcon} />
                    </div>
                </div>
            </div>
        </UpdateStorageContext.Provider>
    );
}

export default App;
