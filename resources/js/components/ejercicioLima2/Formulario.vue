<template>
    <div class="container">
        <div class="card">
            <div class="card-header">FORMULARIO</div>
            <div class="card-body">
                <div class="row">
                    <div class="form-group col-lg-6">
                        <label for="firstName" class="control-label">first name:</label>
                        <input type="text" name="firstName" id="firstName" class="form-control">
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="lastName" class="control-label">last name:</label>
                        <input type="text" name="lastName" id="lastName" class="form-control">
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="" class="control-label">profesion:</label>
                        <select name="" id="" class="form-control">
                            <option>casaca</option>
                            <option>casaca</option>
                            <option>casaca</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="">avatar</label>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="exampleInputFile">
                            <label class="custom-file-label" for="exampleInputFile">Elije tu avatar</label>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <img alt="">
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <!-- <input v-if="editMode" type="button" class="btn btn-default" value="cancel" @click="cancelarEdicion">
                <input v-if="editMode" type="button" class="btn btn-success" value="guardar cambios" @click="editarUser">
                <input v-else type="button" class="btn btn-primary" value="guardar" @click="guardarUser"> -->
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
