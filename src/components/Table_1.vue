<template>
    <b-container>
        <div class="text-left">
            <b-table hover sort-icon-left :items="array" :fields="fields" class='table-1'></b-table>
        </div>  
    </b-container>
</template>

<script>
export default {
    name: "Table_1",
    data() {
        return {            
            fields: [
                { key: 'time', sortable: true, class: 'text-blue' },
                { key: 'player', sortable: true },
                { key: 'stats', sortable: true },
            ],
            array: [
                { time: '00:00:20', player: '(#20) Unknown Player', stats: '2 Point FGs' },
                { time: '00:00:20', player: '(#12) Thomas Miller', stats: '3 Point FGs' },
                { time: '00:00:23', player: '(#3) Unknown Player', stats: 'Assists' },
                { time: '00:00:23', player: '(#20) Unknown Player', stats: 'Rebounds' },
                { time: '00:00:41', player: '(#1) Joseph Johnson', stats: 'Block' },
                { time: '00:00:53', player: '(#12) Thomas Miller', stats: 'Steals' }
            ]
        };
    }
}
</script>

<style scoped>
</style>