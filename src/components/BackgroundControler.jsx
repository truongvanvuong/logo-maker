import React, { useState, useEffect, useContext } from 'react';
import { Slider } from '@/components/ui/slider';
import ColorPickerController from './ColorPickerController';
import UpdateStorageContext from '@/Context/UpdateStorageContext';
const BackgroundControler = () => {
    const storageValue = JSON.parse(localStorage.getItem('value'));
    const [rounded, setRounded] = useState(storageValue?.bgRounded || 0);
    const [padding, setPadding] = useState(storageValue?.bgPadding || 0);
    const [color, setColor] = useState(storageValue?.bgColor || '#fff');
    const { UpdateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

    useEffect(() => {
        const updatedValue = {
            ...storageValue,
            bgRounded: rounded,
            bgPadding: padding,
            bgColor: color,
        };
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [rounded, padding, color]);
    return (
        <div>
            <div className="py-2">
                <label className="p-2 flex justify-between item-center">
                    Bo tròn
                    <span>{rounded} px</span>
                </label>
                <Slider defaultValue={[rounded]} max={500} step={1} onValueChange={(e) => setRounded(e[0])} />
            </div>
            <div className="py-2">
                <label className="p-2 flex justify-between item-center">
                    Khoảng đệm
                    <span>{padding} px</span>
                </label>
                <Slider defaultValue={[padding]} max={100} step={1} onValueChange={(e) => setPadding(e[0])} />
            </div>
            <div className="py-2">
                <label className="p-2 flex justify-between item-center">Màu sắc</label>
                <ColorPickerController selectedColor={(color) => setColor(color)} />
            </div>
        </div>
    );
};

export default BackgroundControler;
