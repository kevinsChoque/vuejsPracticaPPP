<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Lista de usuarios</div>
            <div class="card-body">
                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>profession</th>
                            <th>avatar</th>
                            <th>Modify</th>
                        </tr>
                        <tr>
                            <td>ca</td>
                            <td>cas</td>
                            <td>ca</td>
                            <td>cas</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
