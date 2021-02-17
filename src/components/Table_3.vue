<template>
    <b-container>
        <div class="text-left">
            <b-table hover sort-icon-left :items="items" :fields="fields" class='table-3'></b-table>
        </div>    
    </b-container>
</template>

<script>
export default {
    name: "Table_3",
    data() {
        return {
            fields: [
                { key: 'in', sortable: true },
                { key: 'player_1', sortable: true },
                { key: 'player_2', sortable: true },
                { key: 'player_3', sortable: true },
                { key: 'player_4', sortable: true },
                { key: 'player_5', sortable: true },
                { key: 'out', sortable: true },
                { key: 'value', label: 'Plus/Minus', sortable: true }
            ],
            items: [
                { 
                    in: '10:10 (P1)', 
                    player_1: 'Ahmad Nazeri', 
                    player_2: 'Alice Krejcova', 
                    player_3: 'Andrei Masharin', 
                    player_4: 'Antonin Hafer', 
                    player_5: 'Asaka Chimako', 
                    out: 0.12, 
                    value: '8 (22-14)'
                },
                { 
                    in: '10:10 (P1)', 
                    player_1: 'Awaatif Al Sadek', 
                    player_2: 'Boris Ukhtomsky', 
                    player_3: 'Damoen Peterson', 
                    player_4: 'Diego Morata', 
                    player_5: 'Dushane Daniel', 
                    out: 0.12, 
                    value: '8 (22-14)'                                    
                },
                { 
                    in: '10:10 (P1)', 
                    player_1: 'Debora Barbosa', 
                    player_2: 'Freddy Kauschke', 
                    player_3: 'Henk Fortuin', 
                    player_4: 'Igor Antonovich', 
                    player_5: 'Jagat Shahidulan', 
                    out: 0.12, 
                    value: '8 (22-14)' 
                },
                { 
                    in: '10:10 (P1)', 
                    player_1: 'Jana Strassmann', 
                    player_2: 'Jordi Sandiago', 
                    player_3: 'Kari Granleese', 
                    player_4: 'Laquita Elliott', 
                    player_5: 'Lia Castro', 
                    out: 0.12, 
                    value: '8 (22-14)' 
                },
                { 
                    in: '10:10 (P1)', 
                    player_1: 'Mahnaz Farzin', 
                    player_2: 'Ngo Hai Giang', 
                    player_3: 'Ogasawara Katsumi', 
                    player_4: 'Pan Su', 
                    player_5: 'Pok Ae-Ra', 
                    out: 0.12, 
                    value: '8 (22-14)' 
                },
                { 
                    in: '10:10 (P1)', 
                    player_1: 'Qin Shi', 
                    player_2: 'Quinten Kortum', 
                    player_3: 'Richardo Kann', 
                    player_4: 'Sakane Miiko', 
                    player_5: 'Song Bao', 
                    out: 0.12, 
                    value: '8 (22-14)' 
                },
                { 
                    in: '10:10 (P1)', 
                    player_1: 'Stina Gunnarsdottir', 
                    player_2: 'Sudanka Bakalowits', 
                    player_3: 'Suhaib Al Minhas', 
                    player_4: 'Tamas Bunce', 
                    player_5: 'Tua Manuera', 
                    out: 0.12, 
                    value: '8 (22-14)' 
                },
                { 
                    in: '10:10 (P1)', 
                    player_1: 'Veerie de Bree', 
                    player_2: 'Waiapi Karaka', 
                    player_3: 'Wen Yahui', 
                    player_4: 'William Diwedi', 
                    player_5: 'Zoe Miller', 
                    out: 0.12, 
                    value: '8 (22-14)' 
                }
            ]
        };
    }
}
</script>

<style scoped>

</style>