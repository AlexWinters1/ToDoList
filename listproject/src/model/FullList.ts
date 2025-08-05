import ListItem from './ListItem'

interface List {
    //property and methods
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}
export default class FullList implements List {
    //instantiating a new list
    static instance: FullList = new FullList()
    //receives private list
    private constructor(
        private _list: ListItem[] = [],
    ) {}
    //getter method for list
    get list(): ListItem[] {
        return this._list
    }
    //loading 
    load(): void{
        //defining stored list, union type 
        const storedList: string | null = localStorage.getItem("myList")
        //type guard
        if (typeof storedList !== "string") return 
        //define parsed list, needs its own type
        const parsedList: { _id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item,itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }
    //saving
    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }
    //clearing
    clearList(): void{
        this._list = [];
        this.save()
    }
    //adding
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }
    //removing
    removeItem(id: string): void {
        this._list= this._list.filter(item => item.id !== id)
        this.save()
    }
}
