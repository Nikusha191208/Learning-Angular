export interface Student {
    name:string
    age:number
    grade:number
    subjects:string
    isEnrolled:boolean
    address: {
        street: '',
        city: '',
        zip: ''
    }
}