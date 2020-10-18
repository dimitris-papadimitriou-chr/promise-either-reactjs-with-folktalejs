import { Client } from "./Client.js";
import { firstOrNone } from "./utils.js";
import conversions from 'folktale/conversions'; 
import { PromiseResultT } from "./PromiseResultT.js";

var toResulWithError = error => x => conversions.maybeToResult(firstOrNone(x), error);

var Repository = ({
    getById: (id) =>
        fetch("https://run.mocky.io/v3/a1678fa6-d99f-4502-939e-44dcd1479f9d")
            .then(response => response.json())
            .then(data => data.clients.filter(client => client.id == id))
            .then(toResulWithError(`no client found`))
});

export let ClientService = ({
    getClientNameById: id =>
        PromiseResultT(Repository.getById(id))
            .map(Client.name)
            .matchWith({
                Ok: ({ value }) => `client name : ${value}`,
                Error: ({ value }) => `Error: ${value}`
            })
            .toPromise()
});