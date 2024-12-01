import UpdateStorageContext from '@/Context/UpdateStorageContext';
import { toPng } from 'html-to-image';
import React, { useEffect, useState, useContext } from 'react';
import * as BiIcons from 'react-icons/bi';
import * as FcIcons from 'react-icons/fc';

const LogoPreview = ({ downloadIcon }) => {
    const storageData = JSON.parse(localStorage.getItem('value'));
    const [storageValue, setStorageValue] = useState(storageData);
    const { UpdateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
    useEffect(() => {
        setStorageValue(storageData);
    }, [UpdateStorage]);

    useEffect(() => {
        if (downloadIcon) {
            downLoadPngLogo();
            console.log('Downloading');
        }
    }, [downloadIcon]);

    const downLoadPngLogo = async () => {
        const downloadLogo = document.getElementById('downloadLogo');
        try {
            const dataUrl = await toPng(downloadLogo, {
                backgroundColor: null,
            });
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'logo.png';
            link.click();
        } catch (error) {
            console.log(error);
        }
    };

    const Icon = ({ name, color, size, rotate, colorIcon = false }) => {
        const iconLibrary = colorIcon ? FcIcons : BiIcons;
        const IconComponent = iconLibrary[name];

        return (
            <div style={{ transform: `rotate(${rotate}deg)` }}>
                <IconComponent size={size} color={color} />
            </div>
        );
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div
                className="h-[500px] w-[500px] bg-gray-200 outline-gray-300"
                style={{
                    padding: storageValue.bgPadding,
                }}
            >
                <div
                    id="downloadLogo"
                    className="h-full w-full flex items-center justify-center"
                    style={{
                        borderRadius: storageValue.bgRounded,
                        background: storageValue.bgColor,
                    }}
                >
                    {storageValue.colorIconFc ? (
                        <Icon
                            colorIcon
                            name={storageValue?.icon}
                            color={storageValue?.iconColor}
                            size={storageValue?.iconSize}
                            rotate={storageValue?.iconRotate}
                        />
                    ) : (
                        <Icon
                            name={storageValue?.icon}
                            color={storageValue?.iconColor}
                            size={storageValue?.iconSize}
                            rotate={storageValue?.iconRotate}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default LogoPreview;
