<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGrupoPermisosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupo__permisos', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('Grupo_id');
            $table->unsignedInteger('Permiso_id');
            $table->foreign('Grupo_id')->references('id')->on('grupos');
            $table->foreign('Permiso_id')->references('id')->on('permisos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grupo__permisos');
    }
}
