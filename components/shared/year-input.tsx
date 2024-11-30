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

    const handleFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const newValue = Math.min(Number(event.target.value), values[1] - step);
        setValues([newValue, values[1]]);
    } 

    const handleSecondInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const newValue = Math.max(Number(event.target.value), values[0] - step);
        setValues([values[0], newValue]);
    } 

    return (
        <div className={className}>
            <Input type='number' min={valueFrom} max={valueTo} step={step} value={values[0]} onChange={handleFirstInputChange} className='mb-3'/>
            <Input type='number' min={valueFrom} max={valueTo} step={step} value={values[1]} onChange={handleSecondInputChange}/>
        </div>
    )
}
