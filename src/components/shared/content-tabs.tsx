import React from 'react'
import { Button, Card, Input, Label, Tabs } from '../ui'
import { TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { TabType } from '@/lib/types'

interface Props {
    className?: string,
    tabs: TabType[]
}

export const ContentTabs: React.FC<Props> = ({ className, tabs }) => {

    return (
        <div className={className}>
            <Tabs defaultValue={String(Object.keys(tabs[0])[0].toLocaleLowerCase())} className="w-full my-8">
                <TabsList className="grid w-full grid-cols-2">
                    {tabs.map((tab, index) => (
                        <TabsTrigger key={index} value={String(Object.keys(tab)).toLocaleLowerCase()}>{String(Object.keys(tab))}</TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((tab, index) => (
                    <TabsContent key={index} value={String(Object.keys(tab)).toLocaleLowerCase()}>
                        {Object.values(tab)}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
