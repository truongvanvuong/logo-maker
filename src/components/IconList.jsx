import PropTypes from 'prop-types';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { iconColorList } from '@/constants/iconColor';
import { iconList } from '@/constants/icons';
import React, { useState } from 'react';
import * as BiIcons from 'react-icons/bi';
import * as FcIcons from 'react-icons/fc';

const IconList = ({ selectedIcon, selectedColorIcon }) => {
    const storageValue = JSON.parse(localStorage.getItem('value'));
    const [icon, setIcon] = useState(storageValue ? storageValue.icon : 'BiHappy');
    const [colorIconFC, setColorIconFC] = useState(storageValue ? storageValue.colorIconFc : false);
    const [openDialog, setOpenDialog] = useState(false);

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
        <div>
            <div onClick={() => setOpenDialog(true)}>
                <label>Icon</label>
                <div className="p-3 flex items-center justify-center cursor-pointer bg-gray-200 my-2 rounded-md w-[50px] h-[50px]">
                    {colorIconFC ? (
                        <Icon name={icon} colorIcon color={'#000'} size={20} />
                    ) : (
                        <Icon name={icon} color={'#000'} size={20} />
                    )}
                </div>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Chọn icon </DialogTitle>
                        <DialogDescription>
                            <Tabs defaultValue="icon">
                                <TabsList>
                                    <TabsTrigger value="icon">Icons</TabsTrigger>
                                    <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                                </TabsList>
                                <TabsContent value="icon">
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-4">
                                        {iconList.map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                                                onClick={() => {
                                                    selectedIcon(icon);
                                                    setIcon(icon);
                                                    selectedColorIcon(false);
                                                    setColorIconFC(false);
                                                    setOpenDialog(false);
                                                }}
                                            >
                                                <Icon name={icon} color={'#000'} size={20} />
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                                <TabsContent value="color-icon">
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-4">
                                        {iconColorList.map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                                                onClick={() => {
                                                    selectedIcon(icon);
                                                    setIcon(icon);
                                                    setColorIconFC(true);
                                                    selectedColorIcon(true);
                                                    setOpenDialog(false);
                                                }}
                                            >
                                                <Icon name={icon} colorIcon color={'#000'} size={20} />
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

IconList.propTypes = {
    selectedIcon: PropTypes.func,
    selectedColorIcon: PropTypes.func,
};

export default IconList;
