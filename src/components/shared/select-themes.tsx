// "use client"
// import React from 'react'
// import { Button, Command, Popover } from '../ui'
// import { PopoverContent, PopoverTrigger } from '../ui/popover'

// import { setThemes } from "@/lib/themes"
// import { Check, X } from 'lucide-react'
// import { cn } from '@/lib/utils'
// import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'

// interface Props {
//     className?: string,
//     selectedThemeId: number,
//     setSelectedThemeId: React.Dispatch<React.SetStateAction<number>>
// }

// export const SelectThemes: React.FC<Props> = ({ className, selectedThemeId, setSelectedThemeId }) => {

//     const [open, setOpen] = React.useState(false)
//     // const [selectedId, setSelectedId] = React.useState<number | null>(null)
//     const [value, setValue] = React.useState("");



//     const filteredThemes = value
//         ? setThemes.filter((theme) => theme.name.toLowerCase().includes(value.toLowerCase()))
//         : setThemes

//     return (

//         <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//                 <Button variant="outline"
//                     role="combobox"
//                     aria-expanded={open}
//                     className={cn("justify-between max-w-[300px] overflow-hidden", className)}>
//                     {selectedThemeId !== 0
//                         ? `${setThemes.find((theme) => theme.id === selectedThemeId)?.name} / id: ${selectedThemeId}`
//                         : "Выберите серию..."}
//                 </Button>
//             </PopoverTrigger>

//             <PopoverContent className="w-[200px] p-0">
//                 <Command>
//                     <CommandInput onValueChange={(value) => setValue(value)} placeholder="Выберите серию..." />
//                     <CommandList>
//                         <CommandEmpty>Серия не найдена</CommandEmpty>
//                         <CommandItem className='flex justify-between font-bold' onSelect={()=> setSelectedThemeId(0)}> Очистить <X strokeWidth={3}/></CommandItem>
//                         <CommandGroup>
//                             {filteredThemes.map((theme) => (
//                                 <CommandItem
//                                     key={theme.id}
//                                     value={`${theme.name} / id: ${theme.id}`}
//                                     onSelect={theme.id == selectedThemeId ? () => setSelectedThemeId(0) : () => {
//                                         setSelectedThemeId(theme.id)
//                                         setOpen(false)
//                                     }}
//                                 >
//                                     {theme.name} / id: {theme.id}
//                                     <Check
//                                         className={cn(
//                                             "ml-auto",
//                                             selectedThemeId === theme.id ? "opacity-100" : "opacity-0"
//                                         )}
//                                     />
//                                 </CommandItem>
//                             ))}
//                         </CommandGroup>
//                     </CommandList>
//                 </Command>
//             </PopoverContent>

//         </Popover>

//     )
// }
