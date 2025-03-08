export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {

    constructor(
        private _id: string  = "",
        private _item: string = "",
        private _checked: boolean = false,
    ) {}

    get id(): string {
        return this._id
    }

    set id(str: string) {
        this._id = str;
    }

    get item(): string {
        return this._item
    }

    set item(str: string) {
        this._item = str;
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(bool: boolean) {
        this._checked= bool;
    }

}