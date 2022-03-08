<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;
class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('art_id')->unique();
            $table->string('author')->notNull();
            $table->string('title')->notNull();
            $table->string('accroche');
            $table->string('texte')->default('');
            $table->enum('status', ['pub', 'nonpub']);
            $table->date('datepub')->default(Carbon::now());
            $table->date('datemod')->default(Carbon::now());
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
