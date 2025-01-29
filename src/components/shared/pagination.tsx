"use client"

import React from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination'
import { usePathname, useSearchParams } from 'next/navigation';

interface Props {
    totalCount: number
}

export const PaginationDemo: React.FC<Props> = ({ totalCount }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const itemsOnPage = 50;
    const pageCount = Math.ceil(totalCount / itemsOnPage);

    return (
        <Pagination>
            <PaginationContent>
                {currentPage != 1 &&
                    <PaginationItem>
                        <PaginationPrevious href={createPageURL(currentPage - 1)} />
                    </PaginationItem>}

                <PaginationItem>
                    <PaginationLink isActive={currentPage == 1} href={createPageURL(1)}>1</PaginationLink>
                </PaginationItem>

                {currentPage >= 3 && <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>}

                {(currentPage !== 2 && currentPage !== 1 ) && <PaginationItem>
                    <PaginationLink href={(currentPage == 1) ? createPageURL(currentPage + 1) : createPageURL(currentPage - 1)}>
                        {currentPage == 1 ? currentPage + 1 : currentPage - 1}
                    </PaginationLink>
                </PaginationItem>}


                {pageCount !== 1 && <PaginationItem>
                    <PaginationLink isActive={currentPage != 1} href={(currentPage == 1) ? createPageURL(currentPage + 1) : createPageURL(currentPage)}>
                        {currentPage == 1 ? currentPage + 1 : currentPage}
                    </PaginationLink>
                </PaginationItem>}


                {currentPage !== pageCount &&
                    <>
                        <PaginationItem>
                            <PaginationLink href={currentPage == 1 ? createPageURL(currentPage + 2) : createPageURL(currentPage + 1)}>{currentPage == 1 ? currentPage + 2 : currentPage + 1}</PaginationLink>
                        </PaginationItem>

                        {(currentPage !== (pageCount - 1)) && (currentPage != (pageCount - 2)) && <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>}


                        {((currentPage !== pageCount - 1) && (pageCount !== 1)) && <PaginationItem>
                            <PaginationLink href={createPageURL(pageCount)}>
                                {pageCount}
                            </PaginationLink>
                        </PaginationItem>}

                        <PaginationItem>
                            <PaginationNext href={createPageURL(currentPage + 1)} />
                        </PaginationItem>
                    </>
                }

            </PaginationContent>
        </Pagination>
    )
}
