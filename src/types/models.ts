// category 

export interface category{
    id: string
    name:string
}

export interface Budget{
    id:string
    categoryId: string
    month:string
    amount:number
}

export interface expense{
    id: string
    categoryId:string
    amount:number
    note:string
    date:string
}