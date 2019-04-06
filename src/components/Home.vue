<template>
    <div>
        <section class="home">
            <label>Temperature</label>
            <input type="text" v-model="Temperature">
            <label>Humidity</label>
            <input type="text" v-model="Humidity">
            <label>PM</label>
            <input type="text" v-model="PM">
            <input type="text" v-model="timestamp">
            <button @click="submitSensor()">Add</button>
            <div v-for="sensor of sensors"
                    v-bind:key="sensor['key']">
                <hr>
                <p>Date: {{sensor.timestamp}}</p>
                <p>Temperature: {{sensor.Temperature}}</p>
                <p>Humidity: {{sensor.Humidity}}</p>
                <p>PM: {{sensor.PM}}</p>
            </div>
            
        </section>
    </div>
</template>
<script>
    import { sensorsRef } from '../firebase'
    export default {
        data() {
            return {
                Temperature: '30',
                Humidity: '25',
                PM: '50'
            }
        },
        firebase: {
            sensors: sensorsRef
        },
        methods: {
            submitSensor() {
                sensorsRef.push({ Temperature: this.Temperature, Humidity: this.Humidity, PM: this.PM, timestamp: this.timestamp })
            }
        },
        computed: {
            timestamp: function () {
                return Date(Date.now())
            }
        }
    }
</script>
