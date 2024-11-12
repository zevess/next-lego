'use client';

import * as React from 'react';
import { useState } from 'react';
import { DualRangeSlider } from '../ui';
import { cn } from '@/lib/utils';


interface Props {
    className?: string,
    valueFrom: number,
    valueTo: number,
    step: number,
    values: number[],
    setValues: React.Dispatch<React.SetStateAction<number[]>>
}

export const DualRangeYearSlider: React.FC<Props> = ({ className, valueFrom, valueTo, values, setValues, step }) => {
    // const [values, setValues] = useState([1949, 2024]);
    // console.log(values)

    return (
        <div className={cn("w-full space-y-5 px-10", className)}>
            <DualRangeSlider
                label={(value) => <span>{value}</span>}
                value={values}
                onValueChange={setValues}
                min={valueFrom}
                max={valueTo}
                step={step}
            />
        </div>
    );
};

