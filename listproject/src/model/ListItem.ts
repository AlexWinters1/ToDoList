export interface Item {
    id: string,
    item: string,
    checked: boolean,
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//this class creates the object that is inheriting properties from the Item interface
export default class ListItem implements Item {

    //constructor holds variables this method is called when we create an instance of the class
    constructor(
        //parameters
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
    ) {}

    //getter and setter methods

    //Id
    get id(): string {
        return this._id
    }
     set id(id: string) {
         this._id = this.id
    }

    //item
    get item(): string {
        return this._item
    }
     set item(item: string) {
        this._item = this.item
    }
    
    //checked
    get checked(): boolean{
        return this._checked
    }
     set checked(checked: boolean){
        this._checked = this.checked
    }
}