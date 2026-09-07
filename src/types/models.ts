// category 

export interface Category{
    id: string
    name:string
}

export interface Budget{
    id:string
    categoryId: string
    month:string
    amount:number
}

export interface Expense{
    id: string
    categoryId:string
    amount:number
    note:string
    date:string
}