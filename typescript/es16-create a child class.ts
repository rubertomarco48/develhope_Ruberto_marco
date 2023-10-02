/**
 * START: Follow the instructions below.
 */

class Currency {
    private name: string;
    private code: string;
    private symbol: string;

    constructor(name: string, code: string, symbol: string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

   
    public describe(): string {
        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;

        return description;
    }

    
    public getName(): string {
        return this.name;
    }

    public getCode(): string {
        return this.code;
    }

    public getSymbol(): string {
        return this.symbol;
    }
}

class DetailedCurrency extends Currency {
    private banknotes: number[];

    

    constructor(name: string, code: string, symbol: string, banknotes: number[]) {
        
        super(name, code, symbol);
        this.banknotes = banknotes;
       
    }


    public describeBankNotes() {
        
        let description = `The ${this.getName()} currency uses the banknotes `;

        
        description += this.banknotes.join(', '); 

        console.log(description);
    }
}

const euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);

console.log(euroCurrency.describe()); 
euroCurrency.describeBankNotes(); 


export {};
