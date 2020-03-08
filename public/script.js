Vue.component('cow_card', {
    props: [
        'name',
        'ambient',
        'object',
        'walk',
        'ruminating',
        'eat_time'
    ],
    template: `
        <div class="w3-half w3-panel">
            <div class="cow_block w3-card w3-padding w3-round w3-theme-l3">
                <div class="cow_name w3-section w3-row w3-padding w3-round-large w3-theme-d5">
                    <h3>Name: {{name}}</h3>
                </div>
                <div class="w3-row-padding w3-section">
                    <div class="w3-col l6 m6 s6">
                        <div class="ambient_temp w3-padding w3-round-large w3-theme-d3">
                            Ambient:<br />
                            {{ambient}} ℃
                        </div>
                    </div>
                    <div class="w3-col l6 m6 s6">
                        <div class="cow_temp w3-padding w3-round-large w3-theme-d3">
                            Cow: <br />
                            {{object}} ℃
                        </div>
                    </div>
                </div>
                <div class="w3-row-padding">
                    <div class="w3-col l4 m12 s12 w3-section">
                        <div class="cow_walk w3-padding w3-round-large w3-theme-d2">
                            Walk: <br />
                            {{walk}}
                        </div>
                    </div>
                    <div class="w3-col l4 m12 s12 w3-section">
                        <div class="cow_RU w3-padding w3-round-large w3-theme-d2">
                            Ruminating: <br />
                            {{ruminating}}
                        </div>
                    </div>
                    <div class="w3-col l4 m12 s12 w3-section">
                        <div class="cow_head w3-padding w3-round-large w3-theme-d2">
                            Eat_time: <br />
                            {{eat_time}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

var cow_data_default = [
    {
        name: 1,
        Time: '2020-02-18 10-01-00',
        Ambient: 12,
        Object: 12,
        Walk: 1,
        Ruminating: 4,
        Eat_time: 2
    }
]

var cow_list = new Vue({
    el: '#cow_list',
    data: {
        cows: cow_data_default
    },
    methods: {
        update_data() {
            console.log("Start request Data from server");
            axios.post('/').then(response => {
                console.log(response)
                this.cows = response.data
            }).catch(error => {
                console.log(error)
            })
        }
    },
    created() {
        this.update_data()
    },
    mounted() {
        this.timer = setInterval(this.update_data, 5000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
})

var last_update_time = new Vue({
    el: '#last_update_time',
    data: {
        time: cow_data_default[0].Time
    },
    methods: {
        update_time() {
            console.log("Start request time from server");
            axios.post('/time').then(response => {
                console.log(response.data)
                this.time = response.data[0].Time
            }).catch(error => {
                console.log(error)
            })
        }
    },
    created() {
        this.update_time()
    },
    mounted() {
        this.timer = setInterval(this.update_time, 5000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
})