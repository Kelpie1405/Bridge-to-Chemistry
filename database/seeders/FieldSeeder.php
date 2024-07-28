<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('fields')->insert([
            'name' => '物理化学',
        ]);
        
        DB::table('fields')->insert([
            'name' => '無機化学',
        ]);
        
        DB::table('fields')->insert([
            'name' => '有機化学',
        ]);
        
        DB::table('fields')->insert([
            'name' => '分析化学',
        ]);
    }
}
