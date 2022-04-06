export class Load {
    get hours(): number {
        return this._hours;
    }

    set hours(value: number) {
        this._hours = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get watts(): number {
        return this._watts;
    }

    set watts(value: number) {
        this._watts = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    private _description!: string;
    private _watts!: number;
    private _quantity!: number;
    private _hours!: number;

    totalWatts(): number {
        return this._quantity * this._watts;
    }

    consumption(): number {
        return this.totalWatts() * this.hours;
    }

    static Init(
        fields: Partial<{
            hours: number
            quantity: number
            watts: number
            description: string
        }>
    ) {
        let _load = new Load();
        _load.hours = fields.hours || 0;
        _load.quantity = fields.quantity || 0;
        _load.watts = fields.watts || 0;
        _load.description = fields.description || "";
        return _load;
    }
}


