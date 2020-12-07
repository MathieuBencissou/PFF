<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('firstname')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('promo')->nullable();
            $table->string('specialisation')->nullable();
            $table->string('techno')->nullable();
            $table->string('emploi_actuel')->nullable();
            $table->integer('dmin')->default(1);
            $table->integer('challenge1_id')->default(-1);
            $table->integer('challenge2_id')->default(-1);
            $table->integer('challenge3_id')->default(-1);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
