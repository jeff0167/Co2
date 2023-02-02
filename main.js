const baseUrl = "https://localhost:7286/Vehicle" // ?id=1&distance=1

const app = Vue.createApp({
    data() {
        return {
            vehicleType: {Car: "", Boat: "", Bicycle: "", Airplane: "", Scooter: "", Train: "", Bus: ""},
            chosenVehicleId : 0,
            chosenVehicle: -1,
            distance: 0,
            number: 100,
            result : 0,

        }
    },

    methods: {
        async CalculateCo2Emission(){    
            // switch(this.chosenVehicle){ 
            //     case "Car": 
            //         this.CarCalc() // this is way to hardcoded, much bad
            //         break
            //     case "Boat":
            //          this.BoatCalc()
            //         break
            //     case "Bicycle": 
            //         this.BicycleCalc()
            //         break
            //     case "Airplane":
            //         this.AirplaneCalc()
            //         break
            //     case "Scooter":
            //         this.ScooterCalc()
            //         break
            //     case "Train": 
            //         this.TrainCalc()
            //         break
            //     case "Bus":
            //         this.BusCalc()
            //         break
            // }
            await this.GetCalc();
            this.result = this.result.toFixed(4);

        },

        async GetCalc(){ // gets called twice at times
            try { 
                this.result = await (await axios.get(baseUrl + "?id=" + this.chosenVehicleId + "&distance=" + this.distance)).data
                //alert("success")
            } catch (ex) {
                alert("Failure")
                this.ExceptionAlert(ex)
            }
        },

        // CarCalc(){
        //     this.result = (this.distance/15) * 0.2; 
        // },
        // BoatCalc(){
        //     this.result = (this.distance/20) * 2.5450; // 20 is the km pr liter
        // },
        // BicycleCalc(){
        //     this.result = this.distance * 0.020625; 
        // },
        // AirplaneCalc(){
        //     this.result = this.distance * 3.10 * 12;
        // },
        // ScooterCalc(){
        //     this.result = (this.distance/100) * 1.536; 
        // },
        // TrainCalc(){
        //     this.result = this.distance * 0.00032;
        // },
        // BusCalc(){
        //     this.result = this.distance * 0.0947; 
        // },
    }
})
