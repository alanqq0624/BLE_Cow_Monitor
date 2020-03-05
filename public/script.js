var last_update_time = new Vue({
    el: '#last_update_time',
    data: {
        time: "2020-02-28 15-01-43"
    }
})

Vue.component('cow_card', {
    props: [
        'name',
        'cid',
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
                    <h3>CID: {{cid}}</h3>
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
                <div class="w3-row-padding w3-section">
                    <div class="w3-third w3-section">
                        <div class="cow_walk w3-padding w3-round-large w3-theme-d2">
                            Walk: <br />
                            {{walk}}
                        </div>
                    </div>
                    <div class="w3-third w3-section">
                        <div class="cow_RU w3-padding w3-round-large w3-theme-d2">
                            Ruminating: <br />
                            {{ruminating}}
                        </div>
                    </div>
                    <div class="w3-third w3-section">
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

var cow_list = new Vue({
    el: '#cow_list',
    data: {
        cows: [
            {
                name: "cow1",
                cid: 1,
                time: '2020-02-28 15-01-43',
                ambient: 12,
                object: 12,
                walk: 1,
                ruminating: 4,
                eat_time: 2
            },
            {
                name: "cow2",
                cid: 2,
                time: '2020-03-01 17-01-23',
                ambient: 24,
                object: 24,
                walk: 2,
                ruminating: 5,
                eat_time: 1
            },
            {
                name: "cow3",
                cid: 3,
                time: '2020-03-04 22-26-55',
                ambient: 33,
                object: 33,
                walk: 3,
                ruminating: 8,
                eat_time: 2
            },
            {
                name: "cow4",
                cid: 4,
                time: '2020-03-04 22-26-55',
                ambient: 215,
                object: 34,
                walk: 9,
                ruminating: 3,
                eat_time: 1
            },
            {
                name: "cow5",
                cid: 5,
                time: '2020-02-27 12-44-53',
                ambient: 22,
                object: 22,
                walk: 7,
                ruminating: 3,
                eat_time: 8
            },
            {
                name: "cow6",
                cid: 6,
                time: '2020-02-25 14-44-55',
                ambient: 23,
                object: 23,
                walk: 8,
                ruminating: 6,
                eat_time: 4
            }
        ]

    }
})