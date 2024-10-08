<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('levels')->insert([
            'name' => '初級',
        ]);
        
        DB::table('levels')->insert([
            'name' => '中級',
        ]);
        
        DB::table('levels')->insert([
            'name' => '上級',
        ]);
        
        DB::table('levels')->insert([
            'name' => '超級',
        ]);
    }
}
