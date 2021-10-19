<template>
    <form class="container">
        <div class="form-row my-5">
            <h1 class="mx-auto">Registro de usuario</h1>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Tipo de documento</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label>Numero de documento</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Primer nombre</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-6">
                <label>Segundo nombre</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Primer apellido</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-6">
                <label>Segundo apellido</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label>Pais</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <label>Area</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <label>Fecha de ingreso</label>
                <input type="date" class="form-control">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>