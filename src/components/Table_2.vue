<template>
    <b-container>
        <div class="text-left mt-5">
            <h2 class="text-title font-weight-bold">Scoring</h2>          
            <b-table hover sort-icon-left :items="scoring" :fields="fields" class='table-1'></b-table>            
        </div>  
        <div class="text-left mt-5">
            <h2 class="text-title font-weight-bold">Field Goals</h2>          
            <b-table hover sort-icon-left :items="scoring" :fields="fields" class='table-1'></b-table>            
        </div>
    </b-container>
</template>

<script>
export default {
    name: "Table_2",
    data() {
        return {
            fields: [
                { key: 'id', label: '#', sortable: true },
                { key: 'name', sortable: true },
                { key: 'points', sortable: true },
                { key: 'FGM', sortable: true },
                { key: 'FGA', sortable: true },
                { key: 'FG', label:'FG %', sortable: true },
                { key: 'value', label: 'Points/Attempt', sortable: true }
            ],
            scoring: [
                { id: '1', name: 'Adam Voit', points: '13', FGM: '13', FGA: '13', FG: '12.31%', value: '0.12' },
                { id: '2', name: 'Thomas Miller', points: '6', FGM: '6', FGA: '6', FG: '23.12%', value: '0.99' },
                { id: '3', name: 'Unknown Player', points: '4', FGM: '4', FGA: '4', FG: '12.31%', value: '0.32' },
                { id: '4', name: 'Eric Griffin', points: '1', FGM: '1', FGA: '1', FG: '23.12%', value: '0.65' },
                { id: '5', name: 'Joseph Jhonson', points: '4', FGM: '4', FGA: '4', FG: '12.31%', value: '0.12' },
                { id: '6', name: 'Thomas Miller', points: '6', FGM: '6', FGA: '6', FG: '23.12%', value: '0.99' },
                { id: '7', name: 'Adam Voit', points: '13', FGM: '13', FGA: '13', FG: '12.31%', value: '0.12' },
                { id: '8', name: 'Thomas Miller', points: '6', FGM: '6', FGA: '6', FG: '23.12%', value: '0.99' },
                { id: '9', name: 'Unknown Player', points: '4', FGM: '4', FGA: '4', FG: '12.31%', value: '0.32' },
            ]
        };
    }
}
</script>

<style scoped>

</style>