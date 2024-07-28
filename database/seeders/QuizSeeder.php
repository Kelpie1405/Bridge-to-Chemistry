<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quizzes')->insert([
            'post_id' => '1',
            'problem' => '２つの水素原子は結合して水素分子を形成する。その理由は？',
            'choice1' => '新しき軌道ができ、エネルギーが高くなるから',
            'choice2' => '新しき軌道ができ、エネルギーが低くなるから',
            'choice3' => 'エンタルピーが増大するため',
            'choice4' => 'エントロピーが増大するため',
            'answer' => '2',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
