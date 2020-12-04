<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChallengesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //reprise objet challenge commedans controller et model
        Schema::create('challenges', function (Blueprint $table) {
            $table->id();
            $table->string('titre', 255);
            $table->string('details', 500)->nullable();
            $table->string('contact', 255)->nullable();
            $table->integer('nb_inscrits')->nullable();
            $table->date('date_limite')->nullable();
            $table->string('technos')->nullable();
            $table->integer('user_id')->nullable();
            $table->timestamps();
        });
    }
    // $table->string('name', 255);
    // $table->string('introduction', 500)->nullable();
    // $table->string('location', 255)->nullable();
    // $table->integer('cost')->nullable();
    // $table->timestamps();

    // 'titre',
    // 'details',
    // 'introduction',
    // 'nb_inscrits',
    // 'userid'
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('challenges');
    }
}
// CREATE TABLE `Challenges` (
//     `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
//     `Titre` varchar(30) NOT NULL,
//     `Détails` varchar(30) NOT NULL,
//     `Nb_inscrits` varbinary(100) NOT NULL,
//     `user_id` int(11) DEFAULT NULL,
//     PRIMARY KEY (`Id`)
