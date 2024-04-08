export interface Section {
    name: string, 
    description: string,
    content: string,
    image?: any,
}

export interface Sections {
    sections: Section[]
}