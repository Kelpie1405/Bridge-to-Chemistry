<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            'title' => '原子をよーく観察する',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'body' => '<h2>２つの水素原子が結合し水素分子が構成される理由</h2><p>２つの水素原子は各々1s軌道を一つ提供し、1s軌道の重なりにで分子軌道が形成される。
            その際、1σ軌道と1u軌道が形成される。<b>重要なのは、1σ軌道はエネルギー準位が水素原子の1s軌道より低く、1u軌道はエネルギー準位が水素原子の1s軌道よりも高いことである</b>
            ２つの水素原子は１つずつ電子を所有しているため、1σ軌道に電子２つが入る。このとき、1σ軌道は1s軌道よりもエネルギー準位が低いため、1s軌道に電子がいるよりも1σ軌道に電子がいる方がエネルギーが安定化される。
            そのため、水素原子同士は結合して水素分子が構成される。</p>',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '1',
            'level_id' => '2',
            'field_id' => '1',
            'created_at' => '2024-07-25 15:40:30',
            'updated_at' => '2024-07-25 15:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => '電子の偏り',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'body' => '分極と電気双極子の関係はベクトルで考えろ',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '1',
            'level_id' => '1',
            'field_id' => '1',
            'created_at' => '2024-07-20 15:40:30',
            'updated_at' => '2024-07-20 15:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'テスト（有機初級）',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '1',
            'level_id' => '1',
            'field_id' => '3',
            'created_at' => '2024-07-10 10:00:30',
            'updated_at' => '2024-07-10 10:00:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'テスト（無機上級）',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '1',
            'level_id' => '3',
            'field_id' => '2',
            'created_at' => '2024-07-05 00:30:00',
            'updated_at' => '2024-07-05 00:30:00',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'コラム１',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '2',
            'created_at' => '2024-07-20 19:40:30',
            'updated_at' => '2024-07-20 19:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'コラム2',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '2',
            'created_at' => '2024-07-21 19:40:30',
            'updated_at' => '2024-07-21 19:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'コラム3',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '2',
            'created_at' => '2024-07-22 10:40:30',
            'updated_at' => '2024-07-22 10:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'コラム4',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '2',
            'created_at' => '2024-07-23 00:40:30',
            'updated_at' => '2024-07-23 00:40:30',
        ]);
        
        DB::table('posts')->insert([
            'title' => 'テスト（分析中級）',
            'body' => 'テスト',
            'lede' => 'ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。ここには、軽い説明が入る。その際、何文字にするかは未定。100文字くらいが想定な気がする。ねーね。',
            'image' => 'https://thumb.ac-illust.com/e7/e7223e207c972fa0d26a0c3615a07eec_w.jpeg',
            'category_id' => '1',
            'level_id' => '2',
            'field_id' => '4',
            'created_at' => '2024-07-01 00:00:00',
            'updated_at' => '2024-07-01 00:00:00',
        ]);
    }
}
