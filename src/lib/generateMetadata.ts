import type { Metadata, ResolvingMetadata } from 'next'

export type MetadataProps = {
    params: Promise<{ id: string }>
    //   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params }: MetadataProps,

): Promise<Metadata> {
    const { id } = await params

    return {
        title: id
    }
}