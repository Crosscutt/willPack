<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePerfilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('perfils', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Nombre')->nullable();
            $table->string('Apellido')->nullable();
            $table->string('CI')->nullable();
            $table->date('Fecha_Nacimiento')->nullable();
            $table->string('Direccion')->nullable();
            $table->unsignedInteger('User_id');
            $table->unsignedInteger('Grupo_id');
            $table->foreign('Grupo_id')->references('id')->on('grupos');
            $table->foreign('User_id')->references('id')->on('users');
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
        Schema::dropIfExists('perfils');
    }
}
