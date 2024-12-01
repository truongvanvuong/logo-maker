import React, { useContext, useEffect, useState } from 'react';

import { Slider } from '@/components/ui/slider';
import ColorPickerController from './ColorPickerController';
import UpdateStorageContext from '@/Context/UpdateStorageContext';
import IconList from './IconList';

const IconController = () => {
    const storageValue = JSON.parse(localStorage.getItem('value'));

    const [size, setSize] = useState(storageValue ? storageValue.iconSize : 280);
    const [rotate, setRotate] = useState(storageValue ? storageValue.iconRotate : 0);
    const [color, setColor] = useState(storageValue ? storageValue.iconColor : '#fff');
    const [icon, setIcon] = useState(storageValue ? storageValue.icon : 'BiHappy');
    const [colorIcon, setColorIcon] = useState(storageValue ? storageValue.colorIconFc : false);
    const { UpdateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

    useEffect(() => {
        const updatedValue = {
            ...storageValue,
            iconSize: size,
            iconRotate: rotate,
            iconColor: color,
            colorIconFc: colorIcon,
            icon: icon,
        };
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [size, rotate, color, icon, colorIcon]);
    return (
        <div>
            <IconList
                selectedIcon={(icon) => setIcon(icon)}
                selectedColorIcon={(colorIconFc) => setColorIcon(colorIconFc)}
            />
            <div className="py-2">
                <label className="p-2 flex justify-between item-center">
                    Kích cỡ
                    <span>{size} px</span>
                </label>
                <Slider defaultValue={[size]} max={500} step={1} onValueChange={(e) => setSize(e[0])} />
            </div>
            <div className="py-2">
                <label className="p-2 flex justify-between item-center">
                    Xoay
                    <span>{rotate} °</span>
                </label>
                <Slider defaultValue={[rotate]} max={360} step={1} onValueChange={(e) => setRotate(e[0])} />
            </div>
            <div className="py-2">
                <label className="p-2 flex justify-between item-center">Màu sắc</label>
                <ColorPickerController hideController={true} selectedColor={(color) => setColor(color)} />
            </div>
        </div>
    );
};

export default IconController;
