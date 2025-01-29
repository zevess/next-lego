import React from 'react'
import { Input } from '../ui'

interface Props {
    className?: string,
    valueFrom: number,
    valueTo: number,
    step: number,
    values: number[],
    setValues: React.Dispatch<React.SetStateAction<number[]>>
}

export const YearInput: React.FC<Props> = ({ className, valueFrom, valueTo, step, values, setValues }) => {

    const handleFirstInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (newValue < valueFrom || newValue >= values[1]) {
            setValues([valueFrom, values[1]]);
        } else {
            setValues([newValue, values[1]]);
        }
    };

    const handleSecondInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (newValue > valueTo || newValue <= values[0]) {
            setValues([values[0], valueTo]); 
        } else {
            setValues([values[0], newValue]);
        }
    };

    const handleFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValues([newValue, values[1]]);
    };

    const handleSecondInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValues([values[0], newValue]);
    };

    return (
        <div className={className}>
            <Input type='number' min={valueFrom} max={valueTo} step={step} value={values[0]} onChange={handleFirstInputChange} className='mb-3' onBlur={handleFirstInputBlur} />
            <Input type='number' min={valueFrom} max={valueTo} step={step} value={values[1]} onChange={handleSecondInputChange} onBlur={handleSecondInputBlur} />
        </div>
    )
}
