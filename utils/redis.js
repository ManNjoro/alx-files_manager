import { createClient } from "redis";

class RedisClient {
    constructor() {
        this.client = createClient()
    .on("connect", () => console.log("Redis client connected to the server")
    )
    .on("error", (err) => console.log(err)
    )
    }

    isAlive(){
        return this.client.connected;
    }

    async get(key){
        this.client.get(key)
    }

    async set(key, value, duration){
        this.client.setex(key, duration, value);
    }

    async del(key){
        this.client.del(key);
    }
}

const redisClient = new RedisClient()
module.exports = redisClient;