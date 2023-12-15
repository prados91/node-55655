const fs = require("fs");
const crypto = require("crypto");

class EventsManager {
    static #perGain = 0.3;
    static #totalGain = 0;
    init() {
        const exist = fs.existsSync(this.path);
        //es sincrono/bloqueante PORQUE esto tiene que suceder PRIMERO si o si.
        if (!exist) {
            const path = this.path;
            const data = JSON.stringify([]);
            fs.writeFileSync(path, data); //es sincrono/bloqueante PORQUE esto tiene que suceder PRIMERO si o si.
        }
    }
    constructor(path) {
        this.path = path;
        this.init();
    }

    async createEvent(data) {
        try {
            const event = {
                id: crypto.randomBytes(12).toString("hex"),
                name: data.name,
                place: data.place,
                price: data.price || 10,
                capacity: data.capacity || 50,
                date: data.date || new date(),
            };
            console.log(event)
            const eventsFile = JSON.parse(await fs.promises.readFile(this.path, "utf-8"));
            eventsFile.push(event);
            const eventsJson = JSON.stringify(eventsFile, null, 2);
            await fs.promises.writeFile(this.path, eventsJson);
            console.log(event.id);
            return event.id;
        } catch (error) {
            return error.message;
        }
    }
}

//const events = new EventsManager("./data/fs/events.json");

module.exports = EventsManager;
