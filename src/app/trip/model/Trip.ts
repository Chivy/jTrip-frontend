export class Trip {

    constructor(
        public name: string,
        public description: string,
        public bankAccountNumber: string,
        public isVisible: boolean,
        public startDate: string,
        public endDate: string,
        public numberOfDays: number,
        public numberOfSeats: number,
        public costPerPerson: number,
        public totalCost: number
    ) { }
} 