import React from 'react';
import * as RG from '@radix-ui/react-radio-group';

const RadioGroup = ({ items, defaultValue, onChange }) => (
    <RG.Root
            className="flex flex-col gap-2.5"
            defaultValue={defaultValue}
            aria-label="View density"
            onValueChange={onChange}
        >
            {items?.map((item) => {
                return <div className="flex items-center">
                    <RG.Item
                        className="bg-white w-[25px] h-[25px] border border-sky-500 rounded-full outline-none cursor-default"
                        value={item.value}
                        id={item.label}
                    >
                        <RG.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:bg-sky-500 after:rounded-full" />
                    </RG.Item>
                    <label className="text-[15px] leading-none pl-[15px]" htmlFor={item.label}>
                        {item.label}
                    </label>
                </div>
            })}
        </RG.Root>
);

export default RadioGroup;