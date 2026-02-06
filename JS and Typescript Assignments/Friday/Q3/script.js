class Country {

    #country_id;
    constructor(country_name, country_id){
        this.country_name = country_name;
        this.#country_id = country_id;
    }

    getId(){
        return this.#country_id;
    }

    static continent(){
        return "ASIA";
    }
 
}

class State extends Country {
    
    constructor(country_name, country_id, state_id, state_name){
        super(country_name, country_id);
        this.state_id = state_id;
        this.state_name = state_name
    }
}

class City extends State {
    constructor(country_name, country_id, state_id, state_name, city_name){
        super(country_name, country_id, state_id, state_name);
        this.city_name = city_name;
    }
}

const city = new City("India", "+91", "xxx", "Bihar", "Siwan")

console.log(city.city_name)
console.log(city.getId())
console.log(City.continent())
console.log(city.state_name)